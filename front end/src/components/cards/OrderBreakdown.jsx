import { Button, Typography } from "antd";
import ProgressBar from "../graphs/ProgressBar";
import { TiArrowSortedDown } from "react-icons/ti";
import TipsPercent from "../graphs/TipsPercent";

const OrderBreakDown = () => {

  return (
    <div className="w-full h-[100%] flex flex-col justify-center gap-4 p-4 bg-whiteColor rounded-lg shadow-md">
      <div className="flex justify-between">
        <Typography className="font-semibold text-base text-grayShColor">
          Order Breakdown
        </Typography>
        <div className="flex justify-between gap-4 items-center">
          <Button className="gap-1 flex items-center decoration-[#B9BBBD] px-3">
            <Typography className="font-b5 text-xs">Last 15 Mint</Typography>
            <TiArrowSortedDown className="text-secondaryColor text-xl" />
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center gap-8">
        <TipsPercent />
        <ProgressBar />
      </div>
    </div>
  );
};

export default OrderBreakDown;
