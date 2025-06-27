import { Button, Typography } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import WeeklyColumnGraph from "../graphs/WeeklyColumnGraph";

const OrdersPerHour = () => {
  return (
    <div className="w-full flex flex-col p-4 bg-whiteColor rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <Typography className="font-b5 text-lg text-grayShColor">
            Orders Per Hour
          </Typography>
        </div>
        <div className="flex justify-between items-center">
          <Button className="gap-1 flex items-center decoration-[#B9BBBD] px-2">
            <Typography className="font-b5 text-xs">05:00 PM</Typography>
            <TiArrowSortedDown className="text-secondaryColor text-xl" />
          </Button>
          <BsThreeDotsVertical className="text-[#B9BBBD] text-xl" />
        </div>
      </div>
      <WeeklyColumnGraph/>
    </div>
  );
};

export default OrdersPerHour;
