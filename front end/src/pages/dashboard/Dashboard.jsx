import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import axios from "../../utils/axios";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get("/auth/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log("res.data",res.data)
      setProfile(res.data);
    };
    fetchProfile();
  }, []);

  return (
    <Card>
      <Typography.Title level={3}>Welcome, {profile?.name}</Typography.Title>
      <Typography.Text>You are logged in as <b>{profile?.role}</b></Typography.Text>
    </Card>
  );
};

export default Dashboard;