import React, { useState } from "react";
import type { Route } from "./+types/countries";
import { Link } from "react-router";

export async function clientLoader() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
    const [search, setSearch] = useState<string>("");
    const [region, setRegion] = useState<string>("");

    const filteredCountries = loaderData.filter((country: any) => {
        const matchesRegion =
            !region || country.region.toLowerCase() === region.toLowerCase();

        const matchesSearch =
            !search ||
            country.name.common.toLowerCase().includes(search.toLowerCase());
        return matchesSearch && matchesRegion;
    });

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
                Countries
            </h2>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:border-blue-500 shadow-sm"
                />
                <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:border-blue-500 shadow-sm"
                >
                    <option value="">All Regions</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>

            {/* No matching countries */}
            {filteredCountries.length === 0 ? (
                <div className="text-lg text-gray-500">
                    No countries match your filters.
                </div>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredCountries.map((country: any) => (
                        <li
                            key={country.cca3}
                            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-100"
                        >
                            <Link
                                to={`/countries/${country.name.common}`}
                                className="text-blue-600 hover:text-blue-700 text-xl font-semibold"
                            >
                                {country.name.common}
                            </Link>
                            <div className="text-gray-600 text-sm mt-2">
                                <div>Region: {country.region}</div>
                                <div>
                                    Population:{" "}
                                    {country.population.toLocaleString()}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
