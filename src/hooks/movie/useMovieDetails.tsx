import { getMovieDetails } from "../../services";
import { useQuery } from "react-query";

export const useMovieDetails = (movie_id: number) => {
  return useQuery(["movieDetails", movie_id], () => getMovieDetails(movie_id));
};
