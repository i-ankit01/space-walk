import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: any icon library

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sm:hidden fixed top-4 right-4 z-50">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 rounded-md bg-white/10 backdrop-blur-md"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Menu Items */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/90 text-white rounded-lg shadow-lg backdrop-blur-md border border-white/10">
                    <ul className="flex flex-col gap-3 p-4">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-xl text-center text-white font-medium bg-white/10 active:scale-95 transition-transform duration-150"
                        >
                            Home
                        </Link>
                        <Link
                            to="/explore"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-xl text-center text-white font-medium bg-white/10 active:scale-95 transition-transform duration-150"
                        >
                            Explore
                        </Link>
                        <Link
                            to="/discoveries"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-xl text-center text-white font-medium bg-white/10 active:scale-95 transition-transform duration-150"
                        >
                            Discoveries
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-xl text-center text-white font-medium bg-white/10 active:scale-95 transition-transform duration-150"
                        >
                            About
                        </Link>
                    </ul>

                </div>
            )}
        </nav>
    );
};

export default MobileNavbar;
