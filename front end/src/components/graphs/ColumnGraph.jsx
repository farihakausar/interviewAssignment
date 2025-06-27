import ReactApexChart from "react-apexcharts";

const ColumnGraph = () => {
  const series = [
    {
      name: "Values",
      data: [60, 80, 40, 70, 60, 25, 60],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 5,
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: "#A3A3A3",
          marginTop: "10px",
          fontSize: "10px",
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      max: 80,
      labels: {
        style: {
          colors: "#A3A3A3",
        },
      },
    },
    colors: [
      "#FF5B5B",
      "#F7C604",
      "#FF5B5B",
      "#F7C604",
      "#FF5B5B",
      "#F7C604",
      "#FF5B5B",
    ],
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    grid: {
      borderColor: "#F3F2F7",
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height="270" className="py-4"/>
  );
};

export default ColumnGraph;
