import { Button, Typography } from "antd";
import LineGraph from "../graphs/LineGraph";
import { TfiDownload } from "react-icons/tfi";

const OrderChart = () => {
  return (
    <div className="w-full flex flex-col p-4 bg-whiteColor rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <Typography className="font-semibold text-base text-secondaryTextColor">
            Order Chart
          </Typography>
          <Typography className="text-sm text-grayLightColor">
            Overall order summary in chart
          </Typography>
        </div>

        <Button
          style={{
            border: "1px solid #3B82F6",
          }}
          className="text-blueColor border-blueColor"
          icon={<TfiDownload />}
        >
          Save Report
        </Button>
      </div>
      <LineGraph />
    </div>
  );
};

export default OrderChart;
