import { useNavigate } from "react-router-dom";

interface Props {
  currentpage: number;
  total_page: number;
}

const Pagination = (props: Props) => {
  const { currentpage, total_page } = props;
  const navigate = useNavigate();

  const handlePreviousPage = () => {
    const numPage = Number(currentpage);
    if (numPage > 1) {
      navigate(`?page=${numPage - 1}`);
    }
  };

  const handleNextPage = () => {
    const numPage = Number(currentpage);
    navigate(`?page=${numPage + 1}`);
  };

  return (
    <div className="flex justify-between mt-4">
      <button onClick={handlePreviousPage} className="px-4 py-2 bg-gray-300 rounded">
        Previous
      </button>
      <span>
        {currentpage} / {total_page}
      </span>
      <button onClick={handleNextPage} className="px-4 py-2 bg-gray-300 rounded">
        Next
      </button>
    </div>
  );
};

export default Pagination;
