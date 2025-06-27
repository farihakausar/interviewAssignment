import { Button, Table, Typography } from "antd";
import "./seller.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import { image } from "../../assets/image";
import { mockDataSource } from "../data";
import { useEffect, useState } from "react";
import SkeletonTable from "../loading/TableSkeleton";

const TopSellersTable = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const columns = [
    {
      title: "Items Name",
      dataIndex: "drinkName",
      key: "drinkName",
    },
    {
      title: "Total units sold",
      dataIndex: "orderedCount",
      key: "orderedCount",
      align: "center",
      render: (text) => <div className="text-center">{text}</div>,
    },
    {
      title: "Total revenue",
      dataIndex: "totalRevenue",
      key: "totalRevenue",
      align: "center",
      render: (text, record) => {
        return (
          <div className="flex items-center justify-center gap-1">
            {text}
            {record.up === "Up" ? (
              <img src={image.arrowUp} alt="up" width={12} />
            ) : (
              <img src={image.arrowDown} alt="down" width={12} />
            )}
          </div>
        );
      }

    },
    {
      title: "Repeat orders",
      dataIndex: "orderedCount",
      key: "orderedCount",
      align: "center",
    },
  ];

  return (
    <div className="top-sellers-container">
      <div className="flex justify-between">
        <div className="table-header">
          <Typography className="text-lg font-b6 text-grayShColor font-custom ml-2">Top Seller Items</Typography>
          <Typography className="ml-2 text-xs font-b5 mt-2 text-grayShColor font-custom">Vodka Redbull (Ordered 9738 times overall)</Typography>
        </div>
        <Button className="gap-1 flex items-center decoration-[#B9BBBD] px-2">
          <Typography className="font-b5 text-xs">Drinks</Typography>
          <TiArrowSortedDown className="text-secondaryColor text-xl" />
        </Button>
      </div>
      {
        isLoading?
        (
          <SkeletonTable rows={6} height={40} />
        ):(
            <Table
              dataSource={mockDataSource}
              columns={columns}
              pagination={false}
              bordered={false}
              className="custom-table"
        />
        )
      }
    
    </div>
  );
};

export default TopSellersTable;
