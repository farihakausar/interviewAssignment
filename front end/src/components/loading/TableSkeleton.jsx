import { Skeleton } from "antd";
import PropTypes from "prop-types";

const SkeletonTable = ({ rows = 10, height = 40 }) => {
    return (
        <div className="grid gap-3">
            {[...Array(rows)].map((_, index) => (
                <Skeleton.Input
                    key={index}
                    active
                    block
                    style={{
                        height: height,
                        borderRadius: 8,
                    }}
                />
            ))}
        </div>
    );
};
SkeletonTable.propTypes = {
    rows: PropTypes.number,
    height: PropTypes.number,
};
export default SkeletonTable;
