"use client";

import Link from "next/link";
import { Film } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";

const Navbar = () => {
  const { favorites } = useAppContext();

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-950 border-b-4 border-yellow-400 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-wide text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <Film className="w-6 h-6" />
          MovieApp
        </Link>

        <nav>
          <ul className="flex space-x-8 text-lg font-medium text-white">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
              Géneros
            </li>
            <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
              Favoritos ({favorites.length})
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;