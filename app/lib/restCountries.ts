const BASE_URL = "https://api.restcountries.com/countries/v5";
const API_KEY = import.meta.env.VITE_RESTCOUNTRIES_API_KEY;

// Free plan caps page size at 100
const PAGE_LIMIT = 100;

async function request(path: string, params: Record<string, string> = {}) {
    if (!API_KEY) {
        throw new Error(
            "Missing VITE_RESTCOUNTRIES_API_KEY. Add it to .env (see .env.example).",
        );
    }

    const url = new URL(BASE_URL + path);
    for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, value);
    }

    const response = await fetch(url, {
        headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const body = await response.json();

    if (!response.ok || body.errors?.length) {
        throw new Error(
            body.errors?.[0]?.message ?? `Request failed (${response.status})`,
        );
    }
    return body.data;
}

export async function fetchAllCountries(fields: string[]) {
    const countries: any[] = [];
    let offset = 0;
    let more = true;

    while (more) {
        const data = await request("", {
            response_fields: fields.join(","),
            limit: String(PAGE_LIMIT),
            offset: String(offset),
        });
        countries.push(...data.objects);
        offset += data.objects.length;
        more = data.meta.more && data.objects.length > 0;
    }
    return countries;
}

export async function fetchCountryByName(name: string, fields: string[]) {
    const data = await request(`/names.common/${encodeURIComponent(name)}`, {
        response_fields: fields.join(","),
    });
    return data.objects[0] ?? null;
}
