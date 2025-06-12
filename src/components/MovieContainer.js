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
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className="relative min-h-screen text-white">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backdropUrl})`,
          zIndex: 0,
        }}
      />

      {/* Capa negra semitransparente encima */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

      {/* Contenido */}
      <div className="relative z-20 p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="rounded-xl shadow-lg"
        />

        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="mb-2"><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
          <p className="mb-2"><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          <p className="mt-4 leading-relaxed">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}


