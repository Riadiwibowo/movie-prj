import { getTvShow } from "../../services";
import { useQuery } from "react-query";

export const useTvShow = (page: string) => {
  return useQuery(["page", page], () => getTvShow(page));
};
