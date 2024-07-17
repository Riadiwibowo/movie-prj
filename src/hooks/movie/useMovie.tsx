import { getNowPlaying } from "../../services";
import { useQuery } from "react-query";

export const useMovie = (page: string) => {
  return useQuery(["page", page], () => getNowPlaying(page));
};
