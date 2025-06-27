import { useState } from "react";
import { Typography } from "antd";
import PieGraphs from "../graphs/PieGraphs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiCheckboxSquare, BiCheckbox } from "react-icons/bi";

const SpendingFrequency = () => {
  const [checkedValues, setCheckedValues] = useState(["showValue"]);

  const handleCheckboxChange = (value) => {
    if (checkedValues.includes(value)) {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    } else {
      setCheckedValues([...checkedValues, value]);
    }
  };

  const options = [
    { label: "Chart", value: "chart" },
    { label: "Show Value", value: "showValue" },
  ];

  const pieData = [
    { value: 41, title: "Big Spenders", colors: ["#D55B61", "#f37c6149"] },
    { value: 34, title: "Casual Spenders", colors: ["#FFC300", "#fff0b3"] },
    { value: 22, title: "New Spenders", colors: ["#FF5A5F", "#ffe6e6"] },
  ];

  // Check if 'showValue' is selected
  const showValue = checkedValues.includes("showValue");

  return (
    <div className="w-full h-[100%] flex flex-col justify-center gap-4 p-4 bg-whiteColor rounded-lg shadow-md">
      <div className="flex justify-between">
        <Typography className="font-semibold text-base text-secondaryTextColor">
          Spending Frequency
        </Typography>
        <div className="flex justify-between gap-4 items-center">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center gap-1 cursor-pointer select-none"
              onClick={() => handleCheckboxChange(option.value)}
            >
              {checkedValues.includes(option.value) ? (
                <BiCheckboxSquare size={20} color="#FF5A5F" />
              ) : (
                  <BiCheckbox size={20} color="#A3A3A3" />
              )}
              <span className="text-secondaryTextColor text-sm">
                {option.label}
              </span>
            </div>
          ))}
          <BsThreeDotsVertical color="#A3A3A3" size={20} />
        </div>
      </div>
      <div className="flex justify-between items-center h-[180px]">
        {pieData.map((data, index) => (
          <div key={index} className="w-[130px]">
            <PieGraphs
              colors={data.colors}
              filledValue={data.value}
              title={data.title}
              showValue={showValue}
              isGradient={index === 0}
              startColor="#9E1F63"
              endColor="#F37C61"
              nonFilledColor="#f37c6129"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpendingFrequency;
