import Text from "antd/es/typography/Text";
import { Button, Col, Form, Input, message, Row, Typography, Select } from "antd";
import { image } from "../../assets/image";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";
import axios from "../../utils/axios";

const { Option } = Select;

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post("/auth/register", values);

      message.success("Signup successful. Please login.");
      navigate("/login");
    } catch (error) {
      message.error(
        error?.response?.data?.msg || "Signup failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-offWhiteColor w-full min-h-screen flex">
      {/* Left side: Signup form */}
      <div className="w-6/12 min-h-screen flex flex-col justify-center items-center">
        <div className="w-[60%]">
          <div className="max-w-md border-none bg-whiteColor rounded-3xl px-6 py-6">
            <Typography className="text-center mb-3 text-secondaryTextColor text-h1 font-b5 font-custom">
              Welcome
            </Typography>
            <Typography className="text-center text-secondaryTextColor text-h3 font-b5 font-custom">
              Signup
            </Typography>

            <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item
                    label={<Text className="text-h4 font-b5 font-custom text-secondaryTextColor">Name</Text>}
                    name="name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label={<Text className="text-h4 font-b5 font-custom text-secondaryTextColor">Email</Text>}
                    name="email"
                    rules={[
                      { type: "email", message: "Please enter a valid email address" },
                      { required: true, message: "Please enter your email" },
                    ]}
                  >
                    <Input placeholder="Enter your email" prefix={<img src={image.email} className="w-4" />} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label={<Text className="text-h4 font-b5 font-custom text-secondaryTextColor">Password</Text>}
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                  >
                    <Input.Password
                      placeholder="Enter your password"
                      prefix={<img src={image.password} className="w-4" />}
                      iconRender={(visible) =>
                        visible ? <FiEye color="#FF8D6E" /> : <FiEyeOff color="#FF8D6E" />
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                <Form.Item name="role" initialValue="user" hidden>
  <Input />
</Form.Item>

                </Col>
                <Col span={24}>
                  <Button
                    htmlType="submit"
                    className="gradient-bg w-full text-white font-semibold py-6 border-none rounded-lg mt-2"
                    loading={loading}
                  >
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          <Link to="/login" className="text-end mt-1 underline decoration-[#FF8D6E] block text-right">
            <Typography className="text-h4 font-b6 font-custom text-[#FF8D6E]">
              Already have an account? Login
            </Typography>
          </Link>
        </div>
      </div>

      {/* Right side: Branding */}
      <div className="w-6/12 min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <img className="w-96" src={image.logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
