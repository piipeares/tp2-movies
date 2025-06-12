import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-cyan-200 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[160px] h-[240px] m-2 flex flex-col">
        <div className="relative flex-shrink-0 w-full h-[200px]">
          <Image
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title || "Sin título"}
            fill
            sizes="(max-width: 768px) 100vw, 160px"
            className="object-cover rounded-t-xl"
          />
        </div>
        <h2
          className="text-xs font-semibold text-center text-black p-2 truncate"
          title={movie.title}
        >
          {movie.title}
        </h2>
      </div>
    </Link>
  );
}





