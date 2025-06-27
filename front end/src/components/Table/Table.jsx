import { Table } from "antd";
import PropTypes from "prop-types";
import "./table.scss";
import { useState } from "react";

const MyTable = ({ columns = [], data = [], onRowClick }) => {
  const [selectedRowKey, setSelectedRowKey] = useState(null);

  // Function to determine row class name based on selection state
  const rowClassName = (record) => {
    return record.key === selectedRowKey ? "selected-row" : "";
  };

  // Function to handle row click
  const handleRowClick = (record) => {
    setSelectedRowKey(record.key === selectedRowKey ? null : record.key);
    if (onRowClick) {
      onRowClick(record);
    }
  };

  return (
    <div className="container">
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        className="text-xs"
        rowClassName={rowClassName}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
    </div>
  );
};

MyTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  onRowClick: PropTypes.func,
};


export default MyTable;