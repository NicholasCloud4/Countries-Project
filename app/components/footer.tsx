import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Footer Logo and Text */}
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="text-2xl font-semibold text-indigo-500">
                            Country Explorer
                        </span>
                        <p className="mt-2 text-sm text-gray-400 text-center sm:text-left">
                            Explore the world with real-time data about
                            countries.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-10 mt-8 sm:mt-0">
                        <Link
                            to="/"
                            className="text-gray-400 hover:text-white text-sm mb-2 sm:mb-0"
                        >
                            Home
                        </Link>
                        <Link
                            to="/countries"
                            className="text-gray-400 hover:text-white text-sm mb-2 sm:mb-0"
                        >
                            Countries
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-400 hover:text-white text-sm mb-2 sm:mb-0"
                        >
                            About
                        </Link>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-6 mt-8 sm:mt-0">
                        <a
                            href="https://twitter.com"
                            className="text-gray-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a
                            href="https://facebook.com"
                            className="text-gray-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            className="text-gray-400 hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; 2025 Country Explorer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
