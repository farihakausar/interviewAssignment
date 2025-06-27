import { Typography } from "antd";

const OrderFrequencyAnalysis = () => {
  const progressData = [
    {
      label: "#Kwavoo Share", value: 81, color: "from-[#F47C61B2] to-[#F47C61B2]"
    },
    { label: "Coupons", value: 47, color: "from-[#FF5A5FB2] to-[#FF5A5FB2]" },
    { label: "Coupons", value: 27, color: "from-[#BE4262B2] to-[#BE4262B2]" },
    { label: "Coupons", value: 81, color: "from-[#D83C41B2] to-[#D83C41B2]" },
    { label: "Coupons", value: 55, color: "from-[#00B074B2] to-[#00B074B2]" },
    { label: "Coupons", value: 20, color: "from-[#464255B2] to-[#464255B2]" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-center">
      <div className="mb-4">
        <div>
          <Typography className="text-lg font-b6 font-custom text-grayShColor">
            Order Frequency Analysis
          </Typography>
          <Typography className="text-xs font-custom text-grayLightColor">
            Order Frequency Age Demographics Per User
          </Typography>
        </div>
        
      </div>

      <div className="space-y-6 mb-4">
        {progressData.map((item, idx) => (
          <div key={idx} className="flex items-center gap-5">
            <div className="w-full bg-[#fae7e7] h-7">
              <div
                className={`h-full bg-gradient-to-r ${item.color}`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
            <span className="text-xs font-b5 font-custom">{item.value}%</span>
          </div>
        ))}
      </div>

      {/* Add legend */}
      <div className="flex justify-start items-center gap-10 text-xs font-custom text-darkBlack mt-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-alphaColor2"></span>
          <span>18-24</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-betaColor2"></span>
          <span>25 - 32</span>
        </div> 
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-thitaColor2"></span>
          <span>25 - 32</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-deltaColor2"></span>
          <span>33 - 40</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gammaColor2"></span>
          <span>40 - 50</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lambdaColor2"></span>
          <span>50+</span>
        </div>
       
      </div>
    </div>
  );
};

export default OrderFrequencyAnalysis;
