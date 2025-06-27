import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";

const PieGraphs = ({ colors, filledValue, title, showValue = false }) => {
  const series = [filledValue, 100 - filledValue];

  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Filled", "Remaining"],
    legend: {
      show: false,
    },
    colors: colors || ["#FF5A5F", "#ffe6e6"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: showValue,
              fontSize: "20px",
              fontWeight: 600,
              color: "#000",
              formatter: function () {
                return `${filledValue}%`;
              },
            },
            total: {
              show: false,
            },
          },
        },
      },
    },
    stroke: {
      width: 0,
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={130}
          width={130}
        />
        {/* Fallback percentage display if ApexCharts labels don't work */}
        {showValue && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-b5 text-lg">
            {filledValue}%
          </div>
        )}
      </div>
      <Typography
        className="text-grayShColor font-custom mt-2 font-b5"
      >
        {title}
      </Typography>
    </div>
  );
};

export default PieGraphs;