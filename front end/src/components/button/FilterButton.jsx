import { Button, Dropdown, DatePicker } from "antd";
import { TiArrowSortedDown } from "react-icons/ti";
import { image } from "../../assets/image";
import { useState } from "react";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const FilterButton = () => {
  const [open, setOpen] = useState(false);
  const [dates, setDates] = useState([dayjs("2025-04-02"), dayjs("2025-06-03")]);

  const handleRangeChange = (values) => {
    if (values) {
      setDates(values);
      console.log("Selected Range:", values[0].format("DD MMM YYYY"), "-", values[1].format("DD MMM YYYY"));
    }
    setOpen(false); // Close dropdown after selecting
  };

  return (
    <Dropdown
      open={open}
      trigger={["click"]}
      onOpenChange={setOpen}
      dropdownRender={() => (
        <div className="p-2 bg-white rounded-md shadow-md">
          <RangePicker
            value={dates}
            onChange={handleRangeChange}
            format="DD MMM YYYY"
            allowClear={false}
          />
        </div>
      )}
    >
      <Button
        className="h-12 border-none shadow-md rounded-md flex items-center gap-2"
        onClick={() => setOpen(!open)}
      >
        <img src={image.filter} alt="" className="text-[#B9BBBD] w-7" /><div>
          <div className="flex flex-row items-start">
            <div className="flex flex-col items-start">
              <span className="text-xs text-[#3E4954] font-custom">
                Filter Period
              </span>
              <span className="text-[8px] text-[#3E4954]">
                {dates[0].format("DD MMM YYYY")} - {dates[1].format("DD MMM YYYY")}
              </span>
            </div>

            <TiArrowSortedDown className="text-secondaryColor text-xl" />
          </div>
        </div>
      </Button>
    </Dropdown>
  );
};

export default FilterButton;
