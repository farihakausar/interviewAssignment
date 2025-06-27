import { Table } from "antd";
import "./table.scss";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";

const data = [
  {
    key: "1",
    custID: "#1465",
    latestOrderDate: "03 April 2025, 09:57 PM",
    customerName: "Johnny Silverhand",
    deviceUse: "Mobile",
    amount: "$233.25",
    customerStatus: (
      <span className="inline-flex items-center font-semibold text-xs text-redColor">
        Frequent User
      </span>
    ),
  },
  {
    key: "2",
    custID: "#1462",
    latestOrderDate: "03 April 2025, 10:14 PM",
    customerName: "Daniel Esperanzo Bravosica Jr.",
    deviceUse: "Tablet",
    amount: "$118.36",
    customerStatus: (
      <span className="inline-flex items-center font-semibold text-xs text-redColor">
        Frequent User
      </span>
    ),
  },
  {
    key: "3",
    custID: "#5069",
    latestOrderDate: "03 April 2025, 09:32 PM",
    customerName: "Travis Tanner",
    deviceUse: "Tablet",
    amount: "$64.35",
    customerStatus: (
      <span className="inline-flex items-center font-semibold text-xs text-purpleColor">
        Returning User
      </span>
    ),
  },
  {
    key: "4",
    custID: "#5298",
    latestOrderDate: "03 April 2025, 09:18 PM",
    customerName: "Jessica Kang",
    deviceUse: "Mobile",
    amount: "$79.67",
    customerStatus: (
      <span className="inline-flex items-center font-semibold text-xs text-purpleColor">
        Returning User
      </span>
    ),
  },
  {
    key: "5",
    custID: "#9964",
    latestOrderDate: "03 April 2025, 09:16 PM",
    customerName: "Monica Ngyuen",
    deviceUse: "Mobile",
    amount: "$32.84",
    customerStatus: (
      <span className="inline-flex items-center font-semibold text-xs text-greenColor">
        New User
      </span>
    ),
  },
  {
    key: "6",
    custID: "#2864",
    latestOrderDate: "03 April 2025, 08:48 PM",
    customerName: "Sarah Bloom",
    deviceUse: "Mobile",
    amount: "$320.61",
    customerStatus: (
      <span className="inline-flex items-center font-semibold text-xs text-greenColor">
        New User
      </span>
    ),
  },
  {
    key: "7",
    custID: "#1025",
    latestOrderDate: "03 April 2025, 08:37 PM",
    customerName: "Jon Snowstar",
    deviceUse: "Mobile",
    amount: "$98.01",
    customerStatus: (
      <span className="inline-flex items-center font-semibold text-xs text-purpleColor">
        Returning User
      </span>
    ),
  },
  {
    key: "8",
    custID: "#987",
    latestOrderDate: "03 April 2025, 08:02 PM",
    customerName: "Joeffrey Plegonpie",
    deviceUse: "Tablet",
    amount: "$169.68",
    customerStatus: (
      <span className="inline-flex items-center font-semibold text-xs text-greenColor">
        New User
      </span>
    ),
  },
];

const columns = [
  {
    title: <div className="font-semibold text-gray-700 text-xs">Cust. ID</div>,
    dataIndex: "custID",
    key: "custID",
    sorter: (a, b) => a.custID.localeCompare(b.custID),
    className: "text-xs",
  },
  {
    title: (
      <div className="font-semibold text-gray-700 text-xs">
        Latest Order Date
      </div>
    ),
    dataIndex: "latestOrderDate",
    key: "latestOrderDate",
    sorter: (a, b) => a.latestOrderDate.localeCompare(b.latestOrderDate),
    className: "text-xs",
  },
  {
    title: (
      <div className="font-semibold text-gray-700 text-xs">Customer Name</div>
    ),
    dataIndex: "customerName",
    key: "customerName",
    sorter: (a, b) => a.customerName.localeCompare(b.customerName),
    className: "text-xs",
  },
  {
    title: (
      <div className="font-semibold text-gray-700 text-xs">Device Use</div>
    ),
    dataIndex: "deviceUse",
    key: "deviceUse",
    sorter: (a, b) => a.deviceUse.localeCompare(b.deviceUse),
    className: "text-xs",
  },
  {
    title: <div className="font-semibold text-gray-700 text-xs">Amount</div>,
    dataIndex: "amount",
    key: "amount",
    sorter: (a, b) =>
      parseFloat(a.amount.replace("$", "")) -
      parseFloat(b.amount.replace("$", "")),
    className: "text-xs",
  },
  {
    title: (
      <div className="font-semibold text-gray-700 text-xs">Customer Status</div>
    ),
    dataIndex: "customerStatus",
    key: "customerStatus",
    sorter: (a, b) => {
      const statusOrder = {
        "Frequent User": 1,
        "Returning User": 2,
        "New User": 3,
      };
      const getText = (element) => {
        if (
          typeof element === "object" &&
          element !== null &&
          element.props &&
          element.props.children
        ) {
          return element.props.children;
        }
        return element;
      };
      const statusA = getText(a.customerStatus);
      const statusB = getText(b.customerStatus);
      return statusOrder[statusA] - statusOrder[statusB];
    },
    className: "text-xs",
  },
  {
    title: "", // Empty column for the three dots
    key: "actions",
    render: () => (
       <span className="text-[#6C757D] cursor-pointer text-lg">
             <HiOutlineDotsHorizontal />
           </span>
    ),
    width: 40, // Adjust width as needed
    className: "text-xs",
  },
];

const CustomerTable = () => {
  const [selectedRowKey, setSelectedRowKey] = useState(null);

  // Function to determine row class name based on selection state
  const rowClassName = (record) => {
    return record.key === selectedRowKey ? "selected-row" : "";
  };

  // Function to handle row click
  const handleRowClick = (record) => {
    setSelectedRowKey(record.key === selectedRowKey ? null : record.key);
  };

  return (
    <div className="container">
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        className="shadow-md text-xs"
        rowClassName={rowClassName}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
    </div>
  );
};

export default CustomerTable;
