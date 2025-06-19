"use client";

import { useRef } from "react";
import MovieCard from "@/components/MovieCard";

export default function MoviesRow({ genreName, movies }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4 pl-1">
        {genreName}
      </h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3 shadow-md transition duration-300"
          aria-label="Scroll left"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          ←
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 px-12 scrollbar-hide"
          style={{
            overflowY: "hidden",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="w-56 flex-shrink-0 px-1 py-4"
              style={{ perspective: "1000px" }}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3 shadow-md transition duration-300"
          aria-label="Scroll right"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          →
        </button>
      </div>
    </section>
  );
}
