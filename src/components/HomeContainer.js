import MoviesContainer from "@/components/MoviesContainer";

export default function HomeContainer() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Películas en tendencia</h1>
      <MoviesContainer />
    </div>
  );
}
