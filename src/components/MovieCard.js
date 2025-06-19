"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/contexts/AppContext";

export default function MovieCard({ movie }) {
  const { favorites, handleAddToFavorites } = useAppContext();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddToFavorites(movie.title, movie.poster_path, movie.id);
  };

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="flex flex-col w-full h-full bg-gray-800 hover:bg-gray-700 text-white rounded-2xl shadow-md overflow-visible transform transition-transform duration-300 hover:scale-105 hover:z-10 hover:shadow-xl cursor-pointer"
    >
      <div className="relative w-full h-[360px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || "Sin título"}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex items-center justify-between px-3 py-2 bg-gray-900 gap-2 h-16">
        <h2 className="text-sm font-semibold text-white group-hover:text-yellow-400 w-full leading-snug text-center px-1">
          {movie.title}
        </h2>

        <button
          onClick={handleFavoriteClick}
          className={`flex-shrink-0 text-lg px-2 py-1 rounded-full transition-colors duration-300 ${
            isFavorite
              ? "bg-yellow-500 text-white"
              : "bg-yellow-300 text-gray-800 hover:bg-yellow-400"
          }`}
          title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          ⭐
        </button>
      </div>
    </Link>
  );
}
