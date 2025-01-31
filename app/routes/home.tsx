import { Link } from "react-router";
import type { Route } from "./+types/home";
import { IoIosArrowForward } from "react-icons/io";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Country Explorer" },
        {
            name: "View country data and information",
            content: "Welcome to the Country Explorer",
        },
    ];
}

export default function Home() {
    return (
        <div className="px-2 py-32 bg-white md:px-0">
            <div className="container items-center max-w-6xl mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full md:w-1/2 md:px-3">
                        <div className="space-y-6 sm:max-w-md lg:max-w-lg">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                                <span className="block xl:inline">
                                    Explore Countries with
                                </span>
                                <span className="block text-indigo-600 xl:inline">
                                    Real-Time Data
                                </span>
                            </h1>
                            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl">
                                Discover details about every country around the
                                world – from capitals to regions!
                            </p>
                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                <Link
                                    to="/countries"
                                    className="flex items-center justify-center px-6 py-3 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                >
                                    Explore Now
                                    <IoIosArrowForward className="ml-2 mt-0.5" />
                                </Link>
                                <Link
                                    to="/about"
                                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="overflow-hidden rounded-md shadow-xl">
                            <img
                                src="https://images.pexels.com/photos/417351/pexels-photo-417351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Explore countries"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
