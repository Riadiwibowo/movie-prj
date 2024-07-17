import { getMovieDetails, getTvShow } from "../../services";

import { getTvShowDetails } from "../../services";
import { useQuery } from "react-query";

export const useTvShowDetails = (series_id: number) => {
  return useQuery(["tvshowDetails", series_id], () => getTvShowDetails(series_id));
};
