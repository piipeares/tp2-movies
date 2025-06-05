import MovieContainer from "@/components/MovieContainer";

export default function MoviePage({ params }) {
  return <MovieContainer id={params.id} />;
}


