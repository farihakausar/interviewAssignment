import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import { TbHomeHand, TbFaceIdError } from "react-icons/tb";

const ErrorScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      
      <Typography className="text-8xl font-b7 text-primaryColor flex gap-2 items-center justify-center font-custom  p-2 m-5">
        4<TbFaceIdError />4
      </Typography>
      <Typography className="text-5xl font-b6 font-custom capitalize">page not found</Typography>
      <Link to="/"><Button className="mt-5 bg-primaryColor text-whiteColor border border-primaryColor">
        <TbHomeHand /> Back to home 
      </Button> </Link>
    </div>
  );
};

export default ErrorScreen;
