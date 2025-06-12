"use client";

import { useRef } from "react";
import MovieCard from "@/components/MovieCard";

export default function MoviesRow({ genreName, movies }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 160 * 3 + 24; // ancho + margen entre cards
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-3">{genreName}</h2>
      <div className="relative flex items-center">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-20 bg-black bg-opacity-40 hover:bg-opacity-80 text-white rounded-full p-3 shadow-md transition duration-300"
          aria-label="Scroll left"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 px-12 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-20 bg-black bg-opacity-40 hover:bg-opacity-80 text-white rounded-full p-3 shadow-md transition duration-300"
          aria-label="Scroll right"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}



