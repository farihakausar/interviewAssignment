import { Segmented, Button } from "antd";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const ReviewPaginate = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const safeTotalPages =
    Number.isInteger(totalPages) && totalPages > 0 ? totalPages : 1;

  return (
    <div className="flex items-end justify-between space-x-4">
      <Button
        type="primary"
        shape="round"
        className={`${
          currentPage === 1 ? "bg-black" : "bg-[#FF5A5F]"
        } text-white font-slab border-none font-[5px] py-5`}
        icon={<MdArrowBackIos />}
        onClick={handlePrevious}
        // disabled={currentPage === 1}
        disabled
      >
        Previous
      </Button>

      <Segmented
        className="rounded-[50px] bg-white border font-slab px-1 py-1"
        options={[...Array(safeTotalPages).keys()].map((page) => ({
          label: (
            <span
              className={
                currentPage === page + 1
                  ? "bg-[#FF5A5F] text-white rounded-full px-4 py-1"
                  : "text-orangeColor"
              }
            >
              {page + 1}
            </span>
          ),
          value: page + 1,
        }))}
        value={currentPage}
        onChange={onPageChange}
      />

      <Button
        type="primary"
        shape="round"
        className={`${
          currentPage === safeTotalPages ? "bg-black" : "bg-[#FF5A5F]"
        } text-white font-slab border-none font-[5px] py-5`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <MdArrowForwardIos />
      </Button>
    </div>
  );
};

export default ReviewPaginate;
