"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    async function fetchTrending() {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662&language=es-ES`
      );
      const data = await res.json();
      setMovies(data.results.slice(0, 5));
    }

    fetchTrending();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 5);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleSelect = (index) => {
    setCurrent(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 5);
    }, 5000);
  };

  if (movies.length === 0) return null;

  const movie = movies[current];

  return (
    <section className="relative h-[70vh] w-full overflow-hidden text-white">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        className="object-cover brightness-50 transition duration-1000"
        priority
      />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-950 z-0" />

      <div
        key={movie.id}
        className="relative z-10 h-full flex items-center px-8 transition-opacity duration-700 opacity-100 animate-fade-in"
      >
        <div className="max-w-2xl space-y-4 bg-black/50 p-6 rounded-xl shadow-lg transition-opacity duration-700 opacity-0 animate-fade-simple">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            {movie.title}
          </h1>

          <p className="text-gray-200 text-sm sm:text-base max-h-24 overflow-hidden">
            {movie.overview}
          </p>

          <Link
            href={`/movie/${movie.id}`}
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full shadow transition duration-300 hover:scale-105"
          >
            Ver más
          </Link>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-yellow-400" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;