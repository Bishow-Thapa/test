import React from "react";
import { Button, Checkbox, Form, Flex, Input, Tabs, Typography } from "antd";
import { LockOutlined, SettingOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const LoginForm = ({ onFinish, loading }) => (
  <>
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <Title
        level={1}
        style={{
          fontSize: "2.4em",
          marginBottom: "1em",
          color: "var(--primary-color)",
        }}
      >
        TreMS
      </Title>
      <Title
        level={2}
        style={{ color: "#5E5873", fontSize: "1.8em", margin: "10px 0px" }}
      >
        Welcome to TreMs! 👋🏻
      </Title>
      <Text style={{ color: "var(--text-color-light)" }}>
        Please sign in to your account.
      </Text>
    </div>

    <Tabs
      defaultActiveKey="1"
      items={[
        {
          key: "1",
          label: "Login",
          children: (
            <Form
              form={Form.useForm()[0]}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  type="text"
                  size="large"
                  placeholder="Enter your email"
                  style={{ textAlign: "center" }}
                  prefix={
                    <SettingOutlined
                      style={{
                        color: "#cf1721",
                        marginRight: "8px",
                      }}
                    />
                  }
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  size="large"
                  style={{ textAlign: "center" }}
                  prefix={
                    <LockOutlined
                      style={{
                        color: "#cf1721",
                        marginRight: "8px",
                      }}
                    />
                  }
                />
              </Form.Item>

              <Flex justify="space-between">
                <Form.Item name="remember" valuePropName="checked" label={null}>
                  <Checkbox style={{ fontSize: "12px", fontFamily: "roboto" }}>
                    Remember me
                  </Checkbox>
                </Form.Item>
                <Button
                  type="link"
                  style={{ padding: 0, fontSize: "12px", fontFamily: "roboto" }}
                  href="/"
                >
                  Forgot Password?
                </Button>
              </Flex>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  loading={loading}
                  style={{ fontFamily: "roboto" }}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </Form.Item>
            </Form>
          ),
        },
      ]}
    />
  </>
);

export default LoginForm;
