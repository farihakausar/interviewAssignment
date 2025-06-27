import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { image } from "../../assets/image";
import Logout from "../../components/modals/Logout";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: image.icon1,
    link: "/",
    paths: ["/"],
  },
  {
    name: "doctorManagement",
    icon: image.icon2,
    link: "/doctorManagement",
    paths: ["/doctorManagement"],
  },
  {
    name: "doctorDirectory",
    icon: image.icon2,
    link: "/doctorDirectory",
    paths: ["/doctorDirectory"],
  },
  {
    name: "Appointments",
    icon: image.icon3,
    link: "/myAppointments",
    paths: ["/myAppointments"],
  },
 
  {
    name: "Logout",
    icon: image.icon5,
    isLogout: true,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  const isActiveRoute = (item) => {
    if (!item.paths) return false;
    if (location.pathname === "/" && item.link === "/") {
      return true;
    }
    return item.paths.some((path) => {
      if (path === "/") return false;
      return location.pathname.startsWith(path);
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const showLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="h-full bg-whiteColor">
      <div className="py-11 text-start px-9">
        <img className="w-52" src={image.sidebarLog} alt="Logo" />
      </div>
      <ul className="my-5">
        {sidebarItems.map((item, index) => (
          <li key={index} className="mb-4 mx-8 relative font-custom">
            {item.isLogout ? (
              <div
                onClick={showLogoutModal}
                className="flex items-center font-b5 text-h4 p-3 hover:bg-lightCoralColor rounded-[.5rem] hover:text-whiteColor text-secondaryTextColor before-class cursor-pointer"
              >
                <img className="mr-3 w-4" src={item.icon} alt={item.name} />
                {item.name}
              </div>
            ) : (
              <Link
                to={item.link}
                className={`flex items-center font-b5 text-h4 p-3 hover:bg-lightCoralColor rounded-[.5rem] hover:text-whiteColor text-secondaryTextColor before-class ${isActiveRoute(item)
                    ? "bg-lightCoralColor text-whiteColor rounded-[.5rem] active"
                    : ""
                  }`}
              >
                <img className="mr-3 w-4" src={item.icon} alt={item.name} />
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <Logout
        open={isLogoutModalOpen}
        handleOk={handleLogout}
        handleCancel={closeLogoutModal}
      />
    </div>
  );
};

export default Sidebar;