import { Typography } from "antd";
import { TiArrowSortedDown } from "react-icons/ti";
import { Icon } from "@iconify/react/dist/iconify.js";
import { image } from "../../assets/image";
import PropTypes from "prop-types";

const PanelHeader = ({ title, subtitle }) => {
    return (
        <div className="flex flex-row items-center justify-between">
            {/* title */}
            <div className="flex flex-col items-start">
                <Typography className="font-b7 font-custom text-2xl text-grayShColor">
                    {title}
                </Typography>
                <Typography className="text-h4 font-custom text-orderColor">
                    {subtitle}
                </Typography>
            </div>

            {/* buttons */}
            <div className="flex justify-center gap-6">
                {/* export button */}
                <div
                    className="py-3 px-5 flex rounded-md bg-whiteColor cursor-pointer"
                    style={{ boxShadow: "0px 4px 4px 0px #0000000A" }}
                >
                    <div className="flex flex-row justify-center items-center text-center gap-4">
                        <Typography className="text-h4 font-custom text-secondaryColor">
                            Export
                        </Typography>
                        <Icon
                            icon="solar:export-bold"
                            className="text-secondaryColor"
                            width="24"
                            height="24"
                        />
                    </div>
                </div>
                {/* all events button */}
                <div
                    className="py-3 px-3 flex rounded-md bg-whiteColor cursor-pointer"
                    style={{ boxShadow: "0px 4px 4px 0px #0000000A" }}
                >
                    <div className="flex flex-row justify-center items-center text-center gap-4">
                       
                        <Typography className="text-h4 font-custom text-secondaryColor">
                            All Events
                        </Typography>
                        <TiArrowSortedDown className="text-secondaryColor text-xl" />
                    </div>
                </div>
                {/* today button */}
                <div
                    className="py-3 px-4 flex rounded-md bg-whiteColor cursor-pointer"
                    style={{ boxShadow: "0px 4px 4px 0px #0000000A" }}
                >
                    <div className="flex flex-row justify-center items-center text-center gap-3">
                        <div className="flex items-center w-6">
                            <img src={image.date} alt="date" />
                        </div>
                        <Typography className="text-h4 font-custom text-steelGray">
                            Today
                        </Typography>
                        <TiArrowSortedDown className="text-secondaryColor text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

PanelHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default PanelHeader;
