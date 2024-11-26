import React, { useState } from "react";
import { Layout, Spin, Form, Input, Button, Alert } from "antd";
import { useDispatch } from "react-redux";
import queryString from "query-string";
import { useLoginMutation } from "@features/auth/services/authApi";
import { setAuth } from "@features/auth/services/authSlice";
import { LoginHeader, LoginForm, LoginFooter } from "./";
import * as objPersist from "redux-persist";

console.log("objPersist: ", objPersist);

const { Content } = Layout;

const Login = () => {
  const [login, { isLoading, isError, data, error }] = useLoginMutation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    setLoading(true);
    const { username, password } = values;
    try {
      console.log("Logging in with", values);

      const formData = queryString.stringify({
        username: username,
        password: password,
        grant_type: "password",
        client_id: "myclient",
        client_secret: "ClientSecret1",
        scope: "BankingAppAPI.read",
      });

      const user = await login(formData).unwrap();
      dispatch(setAuth({ user: user?.username, token: user?.accessToken }));
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", width: "100%" }}>
      <LoginHeader />

      <Content
        style={{
          padding: "50px 0",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 420,
            padding: "20px",
          }}
        >
          <LoginForm onFinish={onFinish} loading={loading} />
          {/* <Spin spinning={loading} /> */}
        </div>
      </Content>

      <LoginFooter />
    </Layout>
  );
};

export default Login;
