import { Input, Avatar, Typography } from "antd";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import Notification from "../../components/notification/Notification";
import Settings from "../../components/notification/Settings";

const Header = ({ showSearch, handleSearch }) => {
  const userRole = localStorage.getItem("userRole");

  // Function to capitalize the first letter of the role
  const capitalizeRole = (role) => {
    if (!role) return "";
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    if (value === "") {
      handleSearch(""); // Trigger to show all data when input is cleared
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e.target.value);
    }
  };

  return (
    <div className="main flex h-16 justify-between sticky top-0 w-full bg-offWhiteColor z-10">
      <div className="input w-[50%] flex items-center gap-2">
        {showSearch && (
          <Input
            placeholder="Search here"
            suffix={<FiSearch className="text-[#A4A4A4] text-[19px]" />}
            className="w-full rounded-lg font-custom border border-[#EBEBEB]"
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
          />
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-5 justify-center pr-4">
          <Notification />
          <Settings />
        </div>

        <div className="pl-4 border-l-2 border-gray-300 h-9 flex items-center">
          <Typography className="text-grayShColor font-custom">
            Hello, <span className="font-b6">Scoopy Bar</span>
          </Typography>
        </div>
        <div className="avatar flex items-center">
          <Avatar
            className="font-bold text-black text-h4 cursor-pointer"
            src="https://tinyjpg.com/images/social/website.jpg"
          >
            {capitalizeRole(userRole)?.charAt(0)}
          </Avatar>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  showSearch: PropTypes.bool,
  handleSearch: PropTypes.func,
};

export default Header;
