import MoviesRow from "@/components/MoviesRow";

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

export default async function HomeContainer() {
  const moviesByGenre = await Promise.all(
    popularGenres.map(async (genre) => {
      const movies = await fetchMoviesByGenre(genre.id);
      return { ...genre, movies };
    })
  );

  return (
    <div className="p-4 space-y-10">
      <h1 className="text-3xl font-bold text-white mb-6">Películas por género</h1>
      {moviesByGenre.map(({ id, name, movies }) => (
        <MoviesRow key={id} genreName={name} movies={movies} />
      ))}
    </div>
  );
}
