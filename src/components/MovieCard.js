import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-cyan-200 rounded shadow p-2 hover:shadow-lg transition">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || "Sin título"}
          width={300}
          height={450}
          className="w-full h-auto rounded"
        />
        <h2 className="mt-2 font-semibold text-center">{movie.title}</h2>
      </div>
    </Link>
  );
}
