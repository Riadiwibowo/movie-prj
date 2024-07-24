import { Link } from "react-router-dom";

interface Props {
  series_id: number;
  title: string;
  poster_path: string;
  release_date: string;
  popularity: number;
  size?: string;
}
const TvShowCard = (props: Props) => {
  const { series_id, title, poster_path, release_date, popularity, size } = props;
  return (
    <div className={`flex flex-col ${size}`}>
      <Link to={`/tv-show/${series_id}`}>  
        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`}></img>
        <label className="font-semibold">{title}</label>
      </Link>

      <p>{release_date}</p>
      <p>watched by: {popularity}</p>
    </div>
  );
};

export default TvShowCard;
