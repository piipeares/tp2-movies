import MoviesGrid from "@/components/MoviesGrid";

async function getTrendingMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=8d155a452063365b70d7e38e2609b662"
  );
  const data = await res.json();
  return data.results;
}

export default async function MoviesContainer() {
  const movies = await getTrendingMovies();
  return <MoviesGrid movies={movies} />;
}
