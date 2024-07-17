import { Link } from "react-router-dom";
import React from "react";

interface Props {
  movie_id: number;
  title: string;
  poster_path: string;
  release_date: string;
  size?: string;
}
const MovieCard = (props: Props) => {
  const { movie_id, title, poster_path, release_date, size } = props;
  return (
    <div className={`flex flex-col ${size}`}>
      <Link to={`/movie/${movie_id}`}>
        <img className="rounded-md" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} loading="lazy"></img>
        <label className="font-semibold">{title}</label>
      </Link>

      <p>{release_date}</p>
    </div>
  );
};

export default MovieCard;
