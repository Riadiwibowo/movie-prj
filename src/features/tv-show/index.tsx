import Pagination from "../../component/pagination";
import TvShowCard from "../../component/TvShow-card";
import { TvShow as TvShowType } from "../../services/tv-show/type";
import { useQuery } from "../../hooks/useQuery";
import { useTvShow } from "../../hooks/tvshow/useTvShow";

// const [popularTvshow, setTvShow] = useState<ResponseMovie>();
// useEffect(() => {
//   fetchTvShow();
// }, []);

// const fetchTvShow = async () => {
//   try {
//     const response = await getTvShow();
//     setTvShow(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
const TvShow = () => {
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const { data, isLoading, error } = useTvShow(page!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie details</div>;
  if (!data) return <div>No movie details found</div>;

  return (
    <div className="flex flex-col">
      <label className="text-center text-5xl font-bold p-5 ">Popular Tv-Show</label>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {data?.results.map((item: TvShowType) => (
          <TvShowCard key={item.id} series_id={item.id} poster_path={item.poster_path} title={item.name} release_date={item.first_air_date} popularity={item.popularity} size="w-40" />
        ))}
      </div>
      <Pagination currentpage={data.page} total_page={data.total_pages} />
    </div>
  );
};

export default TvShow;
