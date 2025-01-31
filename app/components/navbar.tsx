import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <header className="w-full px-8 text-gray-700 bg-white shadow-lg">
            <div className="container flex flex-col md:flex-row items-center justify-between py-6 mx-auto max-w-7xl">
                {/* Logo Section */}
                <div className="flex flex-col md:flex-row items-center">
                    <NavLink to="/" className="flex items-center mb-5 md:mb-0">
                        <span className="text-3xl font-extrabold text-gray-900 select-none">
                            Country
                            <span className="text-indigo-600"> Explorer</span>
                        </span>
                    </NavLink>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8 space-x-6">
                        <NavLink
                            to="/"
                            end
                            className="no-underline font-medium text-gray-600 hover:text-indigo-600 transition duration-300"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/countries"
                            className="no-underline font-medium text-gray-600 hover:text-indigo-600 transition duration-300"
                        >
                            Countries
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="no-underline font-medium text-gray-600 hover:text-indigo-600 transition duration-300"
                        >
                            About
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}
