import Text from "antd/es/typography/Text";
import { Button, Col, Form, Input, message, Row, Typography } from "antd";
import { image } from "../../assets/image";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { FiEyeOff, FiEye } from "react-icons/fi";
import axios from "../../utils/axios";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      const res = await axios.post("/auth/login", { email, password });
  
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("role", res.data.user.role);
  
      if (res.data.user.role === "admin") {
        navigate("/");
      } else {
        message.error("Access denied. You are not an admin.");
      }
    } catch (error) {
      message.error(
        error?.response?.data?.msg || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="bg-offWhiteColor w-full min-h-screen flex">
      {/* Left side: Login form */}
      <div className="w-6/12 min-h-screen flex flex-col justify-center items-center">
        <div className="w-[60%]">
          <div className="max-w-md border-none  bg-whiteColor rounded-3xl px-6 py-6">
            <Typography className="text-center mb-3 text-secondaryTextColor text-h1 font-b5 font-custom">
              Welcome
            </Typography>
            <Typography className="text-center text-secondaryTextColor text-h3 font-b5 font-custom">
              Login
            </Typography>

            <Form layout="vertical" onFinish={onFinish} className="" requiredMark={false}>
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item
                    label={
                      <Text className="text-h4 font-b5 font-custom text-secondaryTextColor">
                        Email
                      </Text>
                    }
                    name="email"
                    rules={[
                      {
                        type: "string",
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                      { required: true, message: "Please enter your email" },
                    ]}
                  >
                    <Input
                      className="gap-1"
                      type="email"
                      placeholder="Enter your email address"
                      prefix={<img src={image.email} className="w-4" />}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label={
                      <Text className="text-h4 font-b5 text-secondaryTextColor font-custom">
                        Password
                      </Text>
                    }
                    name="password"
                    rules={[
                      { required: true, message: "Please input your password!" },
                    ]}
                  >
                    <Input.Password
                      className="gap-1"
                      type="password"
                      placeholder="Enter your password"
                      prefix={<img src={image.password} className="w-4" />}
                      iconRender={(visible) =>
                        visible ? (
                          <FiEye color="#FF8D6E" cursor={"pointer"} />
                        ) : (
                          <FiEyeOff color="#FF8D6E" cursor={"pointer"} />
                        )
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Button
                    htmlType="submit"
                    className="gradient-bg w-[100%] text-white font-semibold py-6 border-none rounded-lg mt-2"
                    loading={loading}
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        
        </div>

      </div>

      {/* Right side: Branding */}
      <div className="w-6/12 min-h-screen  gradient-bg flex items-center justify-center">
        <div className="text-center">
          {/* <img className="w-96" src={image.logo} alt="Logo" /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
