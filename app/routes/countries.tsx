import React from "react";
import type { Route } from "./+types/countries";
import { Link } from "react-router";

export async function clientLoader() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
    console.log(loaderData);
    return (
        <div>
            <ul>
                {loaderData.map((country: any, key: number) => (
                    <li key={key}>
                        <Link to={`/countries/${country.name.common}`}>
                            {country.name.common}
                        </Link>
                        <div>
                            Region: {country.region} | Population:{" "}
                            {country.population}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
