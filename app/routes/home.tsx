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
        <div className="px-4 py-20 bg-gray-50 h-screen md:px-6 lg:py-28">
            <div className="container mx-auto max-w-6xl xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    {/* Left Content Section */}
                    <div className="w-full md:w-1/2 md:px-3">
                        <div className="space-y-6 sm:max-w-md lg:max-w-lg">
                            {/* Title with Gradient Effect */}
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                                <span className="block xl:inline">
                                    Explore Countries with
                                </span>{" "}
                                <span className="block bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent xl:inline">
                                    Real-Time Data
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className=" text-base text-gray-600 sm:max-w-md lg:text-lg">
                                Discover insights about every country worldwide
                                – from capitals to population and beyond!
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                <Link
                                    to="/countries"
                                    className="flex items-center justify-center px-6 py-3 text-lg font-medium text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg hover:ring-2 hover:ring-blue-300"
                                >
                                    Explore Now
                                    <IoIosArrowForward className="ml-2 mt-0.5" />
                                </Link>
                                <Link
                                    to="/about"
                                    className="flex items-center px-6 py-3 text-lg font-medium text-gray-700 transition-all bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 hover:border-gray-400"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full md:w-1/2">
                        <div className="relative overflow-hidden rounded-lg shadow-xl transition-transform transform hover:scale-105">
                            <img
                                src="https://images.pexels.com/photos/4784922/pexels-photo-4784922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Explore countries"
                                className="w-full h-auto aspect-[16/9] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
