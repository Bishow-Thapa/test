import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Spin, Form, Input, Button, Alert, notification } from "antd";
import { useDispatch } from "react-redux";
import queryString from "query-string";
import { jwtDecode } from "jwt-decode";
import { useLoginMutation } from "@features/auth/services/authApi";
import { setAuth } from "@features/auth/services/authSlice";
import { LoginHeader, LoginForm, LoginFooter } from "./";
import { notify } from "@shared/utils/notificationUtils";

const { Content } = Layout;

const Login = () => {
  const [login, { isLoading, isError, data, error }] = useLoginMutation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const { username, password } = values;
    try {
      // console.log("Logging in with", values);

      const cqFormData = queryString.stringify({
        grant_type: "password",
        client_id: "Framework_App",
        username: username,
        password: password,
      });

      const formData = queryString.stringify({
        username: username,
        password: password,
        grant_type: "password",
        client_id: "webclient",
        client_secret: "ClientSecret1",
        scope: "BankingAppAPI.read",
      });

      const user = await login(formData).unwrap();

      // console.log("User: ", user);
      const decodedToken = jwtDecode(user?.access_token);
      console.log("Decoded Token:", decodedToken);

      // console.log("Dispatching setAuth with user data:", {
      //   user: user?.username,
      //   token: user?.access_token,
      //   refresh: user?.refresh_token,
      //   role: decodedToken?.role,
      //   scope: decodedToken?.scope,
      // });

      navigate("/dashboard");

      dispatch(
        setAuth({
          // user: user?.username,
          token: user?.access_token || null,
          refresh: user?.refresh_token || null,
          role: decodedToken?.role || null,
          scope: decodedToken?.scope || null,
        })
      );
      setLoading(false);
    } catch (err) {
      setLoading(false);
      // console.log("err: ", err);
      notify(
        "error",
        "topRight",
        err?.data?.error || "Invalid Credentials",
        err?.data?.error_description ||
          "An unexpected error occurred during login.",
        2
      );
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
