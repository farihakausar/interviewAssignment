import { Typography } from "antd";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="justify-between flex items-stretch mb-6">
      <Typography
        className="shadow-md rounded-full p-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <MdOutlineArrowBackIos size={20} />
      </Typography>
    </div>
  );
};

export default BackButton;
