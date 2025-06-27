import { FiSettings } from "react-icons/fi";
import { Popover, Badge, Typography, List, Empty } from "antd";
import { useState } from "react";

const mockNotifications = [
    {
        id: 1,
        title: "New User Registered",
        service: "User Management",
        time: "2 hours ago",
        isRead: false,
    },
    {
        id: 2,
        title: "Payment Received",
        service: "Billing",
        time: "Yesterday",
        isRead: false,
    },
    {
        id: 3,
        title: "Server Downtime Alert",
        service: "Infrastructure",
        time: "2 days ago",
        isRead: false,
    },
];

const Settings = () => {
    const [notifications, setNotifications] = useState(mockNotifications);

    const handleMarkAllAsRead = () => {
        const updated = notifications.map((n) => ({ ...n, isRead: true }));
        setNotifications(updated);
    };

    const unreadNotifications = notifications.filter((n) => !n.isRead);

    const content = (
        <div className="w-[300px]">
            <div className="flex justify-between items-center mb-2">
                <Typography className="text-h4 font-b6 font-custom">
                    Notifications
                </Typography>
                {unreadNotifications.length > 0 && (
                    <Typography
                        className="text-sm font-custom text-tealColor cursor-pointer uppercase hover:text-[11px]"
                        onClick={handleMarkAllAsRead}
                    >
                        Mark all as read
                    </Typography>
                )}
            </div>
            {unreadNotifications.length > 0 ? (
                <div className="max-h-[250px] overflow-y-auto">
                    <List
                        className="flex flex-col gap-2 p-2"
                        dataSource={unreadNotifications}
                        renderItem={(item) => (
                            <List.Item className="p-2 border border-[#E9E9E9] rounded-md flex justify-between items-start mb-2">
                                <div>
                                    <Typography className="font-b5 text-text1">
                                        {item.title}
                                    </Typography>
                                    <Typography className="text-[#A4A4A4]">
                                        {item.service}
                                    </Typography>
                                </div>
                                <Typography className="text-[#316FB5] text-text2">
                                    {item.time}
                                </Typography>
                            </List.Item>
                        )}
                    />
                </div>
            ) : (
                <Empty className="text-center text-gray-500" />
            )}
        </div>
    );

    return (
        <Popover
            content={content}
            trigger="click"
            placement="bottomRight"
            arrowPointAtCenter
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

                <div className="border-primaryColor border-[1.4px] p-1 rounded-md cursor-pointer">
                    < FiSettings className="text-blackColor text-h4" />
                </div>
            </Badge>
        </Popover>
    );
};

export default Settings;
