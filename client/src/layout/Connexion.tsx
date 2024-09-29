import { useState } from "react";
import { Tabs, Form, Input, Button, Radio, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import type { RadioChangeEvent } from "antd/es/radio";


const Connexion = () => {
  const [form] = Form.useForm();
  const [userType, setUserType] = useState("private");
  const navigate = useNavigate();
  const handleUserTypeChange = (e: RadioChangeEvent) => {
    setUserType(e.target.value);
  };

  const handleLoginClick = () => {
    navigate("/dashboard"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">DjibCars Express</h1>

        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane tab="Sign In" key="1">
            <Form layout="vertical" form={form}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <div className="flex justify-between items-center mb-6">
                <Checkbox>Remember me</Checkbox>
                <a href="#" className="text-blue-500">Forgot password?</a>
              </div>

              <Form.Item>
                <Link to="/pro-dashbord/dashboard">
                <Button onClick={handleLoginClick}  type="primary" htmlType="submit" className="w-full">
                  Login
                </Button>
                </Link>
              </Form.Item>

              <div className="flex justify-center mt-4">
                <Button className="mr-2" type="default">Login with Facebook</Button>
                <Button type="default" danger>Login with Google</Button>
              </div>
            </Form>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Register" key="2">
            <Form layout="vertical" form={form}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirm_password"
                rules={[{ required: true, message: "Please confirm your password!" }]}
              >
                <Input.Password placeholder="Confirm your password" />
              </Form.Item>

              <Form.Item>
                <Radio.Group onChange={handleUserTypeChange} value={userType}>
                  <Radio value="private">Private seller</Radio>
                  <Radio value="business">Business seller</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <Checkbox>I accept the privacy policy</Checkbox>
              </Form.Item>

              <Form.Item>
                <Link to="/pro-dashbord/dashboard">
                <Button type="primary" htmlType="submit" className="w-full">
                  Register
                </Button>
                </Link>
              </Form.Item>

              <div className="flex justify-center mt-4">
                <Button className="mr-2" type="default">Register with Facebook</Button>
                <Button type="default" danger>Register with Google</Button>
              </div>
            </Form>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Connexion;
