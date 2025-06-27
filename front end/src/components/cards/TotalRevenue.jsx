import DoubleLineChart from "../graphs/DoubleLineChart";

const TotalRevenue = () => {
  return (
    <div className="w-full flex flex-col bg-whiteColor rounded-lg shadow-md">
      <div className="flex-grow">
        <DoubleLineChart />
      </div>
    </div>
  );
};

export default TotalRevenue;
