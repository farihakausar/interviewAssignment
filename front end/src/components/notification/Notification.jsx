import { Popover, Badge, Typography, List, Empty } from "antd";
import { RiNotification2Line } from "react-icons/ri";
import { useState } from "react";

const mockNotifications = [
  { id: 1, service: "Payment confirmed. Thanks for your order!", date: "12-12-2025", time: "10:36 PM", isRead: false },
  { id: 2, service: "Payment confirmed. Thanks for your order!", date: "12-12-2025", time: "10:36 PM", isRead: false },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [open, setOpen] = useState(false);

  const handleMarkAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, isRead: true }));
    setNotifications(updated);
  };

  const unreadNotifications = notifications.filter((n) => !n.isRead);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const content = (
    <div className="w-[340px]">
      <div className="flex justify-between items-center">
        <Typography className="text-[16px] font-b5 font-custom">Notifications</Typography>
        {unreadNotifications.length > 0 && (
          <Typography
            className="text-xs font-custom text-tealColor cursor-pointer uppercase hover:text-sm"
            onClick={handleMarkAllAsRead}
          >
            Mark all as read
          </Typography>
        )}
      </div>
      {/*Today Notification List */}
      <Typography className="text-darkBlack text-sm font-b5 py-3">Today</Typography>
      {unreadNotifications.length > 0 ? (
        <div className="max-h-[250px] overflow-y-auto pt-1">
          <List
            className="flex flex-col gap-2"
            dataSource={unreadNotifications}
            renderItem={(item) => (
              <div className="p-2 bg-softTeal rounded-md flex items-center gap-4 mb-2">
                {/* Profile Image */}
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <img
                    src="https://www.shutterstock.com/image-photo/outdoor-portrait-young-35-year-260nw-634647947.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Notification Content */}
                <div className="flex flex-col gap-[2px] w-full">
                  <Typography className="text-charcoalColor text-xs font-b6 font-custom">Johnny. S</Typography>
                  <Typography className="text-charcoalColor text-text2 font-custom">
                    {item.service?.split(' ').slice(0, 20).join(' ')}{item.service?.split(' ').length > 20 ? '...' : ''}
                  </Typography>

                  <div className="flex justify-between items-center">
                    <Typography className="text-dimGray text-text2 font-custom">{item.date}</Typography>
                    <Typography className="text-dimGray text-text2 font-custom">{item.time}</Typography>
                  </div>
                </div>
              </div>
            )}
          />
        </div>

      ) : (
        <Empty className="text-center text-gray-500" />
      )}
      {/* Yesterday Notification List */}
      <Typography className="text-darkBlack text-sm font-b5 py-3">Yesterday</Typography>
      {unreadNotifications.length > 0 ? (
        <div className="max-h-[250px] overflow-y-auto pt-1">
          <List
            className="flex flex-col gap-2"
            dataSource={unreadNotifications}
            renderItem={(item, index) => (
              <div key={item.id}
                className={`p-2 flex gap-4 ${index !== unreadNotifications.length - 1 ? "border-b-[1px] decoration-ashGray" : ""
                  }`}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <img
                    src="https://www.shutterstock.com/image-photo/outdoor-portrait-young-35-year-260nw-634647947.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Notification Content */}
                <div className="flex flex-col gap-[2px]">
                  <Typography className="text-charcoalColor text-xs font-b6 font-custom">Johnny. S</Typography>
                  <Typography className="text-charcoalColor text-text2 font-custom">
                    {item.service?.split(' ').slice(0, 20).join(' ')}{item.service?.split(' ').length > 20 ? '...' : ''}
                  </Typography>

                  <div className="flex justify-between items-center">
                    <Typography className="text-dimGray text-text2 font-custom">{item.date}</Typography>
                    <Typography className="text-dimGray text-text2 font-custom">{item.time}</Typography>
                  </div>
                </div>
              </div>
            )}
          />
        </div>

      ) : (
        <Empty className="text-center text-gray-500" />
      )}
    </div>
  );

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-[#1515159f] backdrop-blur-sm z-[999] w-screen h-screen"
          onClick={() => setOpen(false)}
        />
      )}

      <Popover
        content={content}
        trigger="click"
        placement="bottomRight"
        arrowPointAtCenter
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Badge
          count={
            <span
              style={{
                backgroundColor: "#FF5B5B",
                color: "#fff",
                fontSize: "9px",
                fontFamily: "Poppins",
                width: "18px",
                height: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid #F3F2F7",
                borderRadius: "50%",
                lineHeight: 1,
                textAlign: "center",
              }}
            >
              {unreadNotifications.length > 99 ? "99+" : unreadNotifications.length}
            </span>
          }
          showZero
        >
          <div className="border-primaryColor border-[1.4px] p-1 rounded-md cursor-pointer relative">
            <RiNotification2Line className="text-blackColor text-h4" />
          </div>
        </Badge>
      </Popover>
    </>
  );
};

export default Notification;
