import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@features/auth/services/authApi";
import { setAuth } from "@features/auth/services/authSlice";
import { Input, Button, Form, Alert } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isError, data, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      const user = await login({ username, password }).unwrap();
      dispatch(setAuth({ user: user?.username, token: user?.accessToken })); // Persist the user data and token
      console.log("Login successful:", user);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Login</h2>
      <Form
        name="login"
        onFinish={handleSubmit}
        initialValues={{ username, password }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </Form.Item>

        {isError && (
          <Form.Item>
            <Alert
              message={`Login failed: ${
                error?.data?.message || "Unknown error"
              }`}
              type="error"
              showIcon
            />
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default Login;
