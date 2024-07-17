import { useMovieDetails } from "../../../hooks/movie/useMovieDetails";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useMovieDetails(parseInt(id!));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie details</div>;
  if (!data) return <div>No movie details found</div>;

  return (
    <div className="relative p-5">
      <div className="absolute top-0 left-0 w-full h-full ">
        <img className="object-cover w-full h-full opacity-30" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt={data.title} />
      </div>
      <div className="relative z-10 flex flex-row items-center p-10">
        <section className="bg-white bg-opacity-30 p-4 rounded">
          <div className="flex flex-row">
            <img className="rounded-md w-40" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} />
            <div className="flex flex-col pl-5">
              <h1 className="text-4xl font-bold">{data.title}</h1>
              <p>{data.overview}</p>
              <p>Release Date: {data.release_date}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieDetail;
