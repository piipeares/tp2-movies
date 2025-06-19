'use client';

import { useEffect, useState } from "react";
import MoviesGrid from "@/components/MoviesGrid";
import { useSearchParams } from "next/navigation";

const popularGenres = [
  { id: 28, name: "Acción" },
  { id: 35, name: "Comedia" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Terror" },
  { id: 10749, name: "Romance" },
];

async function fetchMoviesByGenre(genreId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=8d155a452063365b70d7e38e2609b662&with_genres=${genreId}&sort_by=popularity.desc&language=es-ES&page=1`
  );
  const data = await res.json();
  return data.results.slice(0, 10);
}

async function fetchTrendingMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662&language=es-ES`
  );
  const data = await res.json();
  return data.results;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const [allMovies, setAllMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const genreMovies = await Promise.all(
        popularGenres.map(async (genre) => {
          const movies = await fetchMoviesByGenre(genre.id);
          return movies;
        })
      );
      const trending = await fetchTrendingMovies();

      const combined = [...genreMovies.flat(), ...trending];

      const unique = Array.from(new Map(combined.map((m) => [m.id, m])).values());
      setAllMovies(unique);
    }

    loadMovies();
  }, []);

  useEffect(() => {
    if (query && allMovies.length > 0) {
      const matches = allMovies.filter((movie) =>
        movie.title?.toLowerCase().includes(query)
      );
      setFiltered(matches);
    }
  }, [query, allMovies]);

  return (
    <div className="p-6 text-white min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      <h1 className="text-3xl font-bold mb-6">
        Resultados para: <span className="text-yellow-400">{query}</span>
      </h1>

      {filtered.length > 0 ? (
        <MoviesGrid movies={filtered} />
      ) : (
        <p className="text-gray-400">No se encontraron resultados.</p>
      )}
    </div>
  );
}



