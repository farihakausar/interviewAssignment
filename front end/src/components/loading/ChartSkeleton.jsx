import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const ChartSkeleton = ({ height }) => {
    return (
        <div
            className="flex items-center justify-center bg-white border rounded-lg shadow-sm"
            style={{ height }}
        >
            <Skeleton.Node active>
                <DotChartOutlined className="text-chartColor text-6xl"/>
            </Skeleton.Node>
        </div>
    );
};

ChartSkeleton.propTypes = {
    height: PropTypes.number,
};

export default ChartSkeleton;
