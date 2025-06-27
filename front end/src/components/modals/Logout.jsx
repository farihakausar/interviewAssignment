import PropTypes from "prop-types";
import { Button, Modal, Typography, message } from "antd";
import { useState } from "react";
import { image } from "../../assets/image";

const Logout = ({ open, handleOk, handleCancel }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      handleOk();
      message.success("Logged out successfully.");
    } catch  {
      message.error("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      centered
      mask={true}
      maskStyle={{
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      footer={[
        <div className="flex gap-8 justify-center m-8" key="footer-buttons">
          <Button
            key="cancel"
            onClick={handleCancel}
            className="border-lightCoralColor text-lightCoralColor font-custom font-b6 px-8 py-5"
          >
            Cancel
          </Button>
          <Button
            key="ok"
            type="primary"
            onClick={handleConfirm}
            loading={loading}
            className="bg-lightCoralColor font-custom font-b6 px-8 py-5"
          >
            Logout
          </Button>
        </div>,
      ]}
    >
      <div className="flex flex-col justify-center items-center gap-8 mt-6">
        <div className="h-16 w-16">
          <img src={image.userLogout} alt="logout" />
        </div>
        <Typography className="text-lg font-b6 font-custom">
          Are you sure you want to logout?
        </Typography>
      </div>
    </Modal>
  );
};

// Add PropTypes for validation
Logout.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default Logout;
