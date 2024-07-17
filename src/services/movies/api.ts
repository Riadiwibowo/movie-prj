import API from "../axiosWithConfig";
import { ResponseMovie } from "./type";

const getNowPlaying = async (page: string) => {
  try {
    const response = await API.get(`/movie/now_playing?language=en-US&page=${page}`);
    console.log(response);
    return response.data as ResponseMovie;
  } catch (error) {
    console.log(error);
  }
};

const getMovieDetails = async (movie_id: number) => {
  try {
    const response = await API.get(`/movie/${movie_id}?language=en-US`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getNowPlaying, getMovieDetails };
