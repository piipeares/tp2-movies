"use client";

import Link from "next/link";
import { Film } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { favorites } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-950 text-white shadow-lg border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-wide cursor-pointer hover:text-yellow-400 transition-colors duration-300"
        >
          <Film className="w-6 h-6" />
          MovieApp
        </Link>

        {/* Nav y Buscador */}
        <nav className="flex items-center space-x-6">
          {/* Formulario de búsqueda */}
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center bg-white/10 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-white/20">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar películas..."
                className="bg-transparent outline-none text-sm text-white placeholder-white/70 px-2 py-1 w-32 sm:w-48 focus:w-60 transition-all duration-300"
              />
              <button
                type="submit"
                className="ml-2 px-3 py-1 text-sm font-semibold text-black bg-yellow-400 rounded-full hover:bg-yellow-500 transition duration-300 shadow-sm"
              >
                Ir
              </button>
            </div>
          </form>

          {/* Links de navegación */}
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/favorites"
                className="hover:text-yellow-400 transition duration-300"
              >
                Favoritos ({favorites.length})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;