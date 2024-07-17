import MovieCard from "../../component/movie-card";
import { Movie as MovieType } from "../../services/movies/type.ts";
import Pagination from "../../component/pagination.tsx";
import { useMovie } from "../../hooks/movie/useMovie.tsx";
import { useQuery } from "../../hooks/useQuery";

const Movie = () => {
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const { data, isLoading, error } = useMovie(page!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie details</div>;
  if (!data) return <div>No movie details found</div>;

  return (
    <div className="flex flex-col">
      <label className="text-center text-5xl font-bold p-5 ">Movie</label>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {data?.results.map((item: MovieType) => (
          <MovieCard key={item.id} movie_id={item.id} poster_path={item.poster_path} title={item.title} release_date={item.release_date} size="w-40" />
        ))}
      </div>
      <Pagination currentpage={data.page} total_page={data.total_pages} />
    </div>
  );
};

export default Movie;
