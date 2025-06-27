import { Segmented, Button } from "antd";
import PropTypes from "prop-types";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const CustomPagination = ({ currentPage, totalPages = 4, onPageChange }) => {
  const pageCount = totalPages > 0 ? totalPages : 1;
  const safeCurrentPage = currentPage > pageCount ? 1 : currentPage;

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
    <div className="flex items-center justify-end gap-6">
      <Button
        type="primary"
        className={`${currentPage === 1 ? "bg-black" : "bg-lightCoralColor"
          } text-white font-custom border-none text-sm py-5 px-4 rounded-[1.2rem]`}
        icon={<SlArrowLeft />}
        onClick={handlePrevious}
        // disabled={currentPage === 1}
        disabled
      >
        Previous
      </Button>

      {/* Page Numbers */}
      <Segmented
        className="rounded-[1.2rem] bg-white border border-grayColor py-1 px-1 flex gap-5"
        options={[...Array(pageCount).keys()].map((page) => ({
          label: (
            <span
              className=""
            >
              {page + 1}
            </span>
          ),
          value: page + 1,
        }))}
        value={safeCurrentPage}
        onChange={onPageChange}
      />

      <Button
        type="primary"
        // shape="round"
        className={`${currentPage === safeTotalPages ? "bg-black" : "bg-lightCoralColor"
          } text-white font-custom border-none text-sm py-5 px-7 rounded-[1.2rem]`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <SlArrowRight />
      </Button>
    </div>
  );
};
CustomPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CustomPagination;
