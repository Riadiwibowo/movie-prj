import API from "../axiosWithConfig";
import { ResponseTvShow } from "./type";

const getTvShow = async (page: string) => {
  try {
    const response = await API.get(`/tv/top_rated?language=en-US&page=${page}`);
    console.log(response);
    return response.data as ResponseTvShow;
  } catch (error) {
    console.log(error);
  }
};
export {};

const getTvShowDetails = async (series_id: number) => {
  try {
    const response = await API.get(`/tv/${series_id}?language=en-US`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getTvShow, getTvShowDetails };
