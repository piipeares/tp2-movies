import Image from "next/image";

async function getMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=8d155a452063365b70d7e38e2609b662&append_to_response=videos,credits&language=es-ES`
  );
  if (!res.ok) {
    throw new Error("Error al obtener los datos de la película");
  }
  return res.json();
}

export default async function MovieContainer({ id }) {
  const movie = await getMovie(id);

  const director = movie.credits?.crew?.find((person) => person.job === "Director");
  const writers = movie.credits?.crew?.filter(
    (person) => person.job === "Writer" || person.job === "Screenplay"
  );

  const trailer = movie.videos?.results?.find(
    (vid) => vid.type === "Trailer" && vid.site === "YouTube"
  );

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {movie.backdrop_path && (
        <div className="absolute inset-0 z-0">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="Fondo"
            fill
            className="object-cover brightness-50 blur-sm scale-110"
            priority
          />
        </div>
      )}

      <div className="relative z-10 p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-xl">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-2xl bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="mb-2">
            <strong>Fecha de lanzamiento:</strong> {movie.release_date}
          </p>
          <p className="mb-2">
            <strong>Rating:</strong> ⭐ {movie.vote_average}
          </p>

          {director && (
            <p className="mb-2">
              <strong>Director:</strong> {director.name}
            </p>
          )}

          {writers.length > 0 && (
            <p className="mb-2">
              <strong>Guionistas:</strong> {writers.map((w) => w.name).join(", ")}
            </p>
          )}

          <div className="mb-4">
            <strong>Géneros:</strong>{" "}
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="inline-block bg-blue-600 text-sm px-3 py-1 rounded-full mr-2 mt-2"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="mt-4 leading-relaxed">{movie.overview}</p>

          <div className="mt-6 flex gap-4 flex-wrap">
            {trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
              >
                Ver tráiler 🎬
              </a>
            )}

            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
            >
              Ver en TMDB 🌐
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}