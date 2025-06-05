import Image from "next/image";

async function getMovie(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8d155a452063365b70d7e38e2609b662`);
  if (!res.ok) {
    throw new Error("Error al obtener los datos de la película");
  }
  return res.json();
}

export default async function MovieContainer({ id }) {
  const movie = await getMovie(id);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
        />
        <div>
          <p><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p className="mt-4">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
