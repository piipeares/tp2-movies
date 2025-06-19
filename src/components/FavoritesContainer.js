"use client";

import { useAppContext } from "@/contexts/AppContext";
import Image from "next/image";
import Link from "next/link";

const FavoritesContainer = () => {
  const { favorites } = useAppContext();

  if (favorites.length === 0) {
    return (
      <div className="text-white text-center py-20 text-xl">
        No tenés películas favoritas todavía ⭐
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400">Tus Favoritos ⭐</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {favorites.map((fav) => (
          <Link
            href={`/movie/${fav.id}`}
            key={fav.id}
            className="bg-gray-800 hover:bg-gray-700 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={`https://image.tmdb.org/t/p/w300${fav.image}`} // ← esto usa el poster_path guardado
                alt={fav.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-3 text-sm font-semibold text-center text-white bg-gray-900">
              {fav.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FavoritesContainer;