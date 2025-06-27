import { Button, Typography } from "antd";
import ColumnGraph from "../graphs/ColumnGraph";
import { TiArrowSortedDown } from "react-icons/ti";

const CustomerMap = () => {
  return (
    <div className="w-full flex flex-col p-4 bg-whiteColor rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <Typography className="font-b5 text-lg text-grayShColor">
            Customer Map
          </Typography>
        </div>
          <Button className="gap-1 flex items-center decoration-[#B9BBBD] px-2">
            <Typography className="font-b5 text-xs">Weekly</Typography>
            <TiArrowSortedDown className="text-secondaryColor text-xl" />
          </Button>
      </div>
      <ColumnGraph />
    </div>
  );
};

export default CustomerMap;
