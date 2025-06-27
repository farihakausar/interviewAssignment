import { Typography } from "antd";
import { PiDotsThreeBold } from "react-icons/pi";
import { totalGuestInsights } from "../data";

const CustomerCard = () => {

  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-7">
      {totalGuestInsights.map((item) => (
        <div
          key={item.id}
          style={{
            background:
              "radial-gradient(circle at bottom right, #FFE9E4 0%, #FFFFFF 65%, #FFE0DC 100%)",
          }}
          className="py-5 px-4 rounded-xl"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center w-full">
              <Typography className="text-sm font-custom font-b6 text-blackColor">
                {item.name}
              </Typography>
              <PiDotsThreeBold className="text-lightCoralColor text-2xl" />
            </div>

            {/* Text Section */}
            <div className="flex items-end gap-2">
              <Typography className="font-b7 text-4xl text-secondaryColor">
                {item.value}
              </Typography>
              <span className="text-secondaryColor font-b7 text-lg">{item.perc}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerCard;
