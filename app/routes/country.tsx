import React from "react";
import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
    const countryName = params.countryName;
    const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    const data = await response.json();
    return data;
}

export default function Country({ loaderData }: Route.ComponentProps) {
    const country = {
        name: loaderData[0]?.name?.common || "N/A",
        officialName: loaderData[0]?.name?.official || "N/A",
        capital: loaderData[0]?.capital || "N/A",
        region: loaderData[0]?.region || "N/A",
        subregion: loaderData[0]?.subregion || "N/A",
        flag: loaderData[0]?.flags?.png || "N/A",
        population: loaderData[0]?.population || "",
    };

    return (
        <div className="p-8 bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section - Country Info */}
                <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        {country.name}
                    </h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            <span className="font-semibold text-lg">
                                Official Name:
                            </span>{" "}
                            {country.officialName}
                        </p>
                        <p>
                            <span className="font-semibold text-lg">
                                Capital:
                            </span>{" "}
                            {country.capital}
                        </p>
                        <p>
                            <span className="font-semibold text-lg">
                                Region:
                            </span>{" "}
                            {country.region}
                        </p>
                        <p>
                            <span className="font-semibold text-lg">
                                Subregion:
                            </span>{" "}
                            {country.subregion}
                        </p>
                        <p>
                            <span className="font-semibold text-lg">
                                Population:
                            </span>{" "}
                            {country.population.toLocaleString()}
                        </p>
                    </div>
                </div>

                {/* Right Section - Flag */}
                {country.flag && (
                    <div className="flex justify-center items-center p-6">
                        <img
                            src={country.flag}
                            alt={`Flag of ${country.name}`}
                            className="w-64 h-auto rounded-lg shadow-xl transition-transform transform hover:scale-105"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
