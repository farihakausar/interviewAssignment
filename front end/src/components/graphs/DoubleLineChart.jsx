import { Button, Typography } from "antd";
import ReactApexChart from "react-apexcharts";
import { TiArrowSortedDown } from "react-icons/ti";

const DoubleLineChart = () => {
  const series = [
    {
      name: "2023",
      data: [
        10000, 18000, 12000, 28000, 35000, 25000, 32000, 28000, 20000, 15000,
        23000, 24000,
      ],
    },
    {
      name: "2024",
      data: [
        22000, 11000, 18000, 38000, 22000, 37500, 20000, 35000, 25000, 27000,
        37000, 23000,
      ],
    },
  ];

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: false,
      },
    },
    colors: ["#29ABE2", "#F44336"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    markers: {
      size: 0, // Hide markers
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#A3A3A3",
        },
      },
    },
    yaxis: {
      min: 10000,
      max: 40000,
      tickAmount: 3,
      labels: {
        formatter: function (value) {
          return "$" + value / 1000 + "k";
        },
        style: {
          colors: "#A3A3A3",
        },

      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "right",
      markers: {
        width: 8,
        height: 8,
        radius: 10,
      },
      itemMargin: {
        horizontal: 10,
      },
      labels: {
        colors: ["#A3A3A3", "#A3A3A3"],
      },
      
    },
    grid: {
      show: true,
      borderColor: "#F3F2F7",
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    tooltip: {
      y: {
        formatter: function (value) {
          return "$ " + value.toLocaleString();
        },
      },
      x: {
        formatter: function (value, { dataPointIndex, w }) {
          return w.config.xaxis.categories[dataPointIndex];
        },
      },
    },
    annotations: {
      points: [
        {
          x: "Jun",
          y: 37500,
          seriesIndex: 1,
          marker: {
            size: 6,
            fillColor: "#29ABE2",
            strokeColor: "#fff",
            strokeWidth: 2,
            radius: 3,
          },
          label: {
            borderColor: "",
            offsetY: 0,
            style: {
              color: "#29ABE2",
              background: "#2D9CDB26",
              // background: "#29ABE2",
            },
            text: "$ 38,753.00",
          },
        },
        {
          x: "Oct",
          y: 27000,
          seriesIndex: 0,
          marker: {
            size: 6,
            fillColor: "#F44336",
            strokeColor: "#fff",
            strokeWidth: 2,
            radius: 3,
          },
          label: {
            borderColor: "",
            offsetY: 0,
            style: {
              color: "#FF5B5B",
              background: "#ffe6e6",
            },
            text: "$ 22,153.59",
          },
        },
      ],
      xaxis: [
        {
          x: "Jun",
          strokeDashArray: 5,
          borderColor: "#29ABE2", // Changed to blue
          label: {
            text: "",
          },
        },
        {
          x: "Oct",
          strokeDashArray: 5,
          borderColor: "#29ABE2", // Changed to blue
          label: {
            text: "",
          },
        },
      ],
    },
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <Typography className="font-b5 text-lg text-grayShColor">
            Revenue Trends
          </Typography>
        </div>
        <Button className="gap-1 flex items-center decoration-[#B9BBBD] px-2">
          <Typography className="font-b5 text-xs">Weekly</Typography>
          <TiArrowSortedDown className="text-secondaryColor text-xl" />
        </Button>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={290}
      />
    </div>
  );
};

export default DoubleLineChart;
