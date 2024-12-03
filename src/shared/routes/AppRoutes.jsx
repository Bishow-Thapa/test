import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import PrivateRoute from "./PrivateRoutes";
import RedirectRoute from "./RedirectRoutes";

const Login = React.lazy(() => import("@features/auth/components/Login/Login"));
const Dashboard = React.lazy(() =>
  import("@features/dashboard/components/Dashboard")
);
const NotFoundPage = React.lazy(() =>
  import("@shared/components/NotFound/NotFoundPage")
);

import { MainLayout } from "@shared/components/DashbordLayout";

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Suspense
        fallback={<Spin indicator={<LoadingOutlined spin />} size="large" />}
      >
        <Routes>
          <Route
            path="/"
            element={
              <RedirectRoute>
                <Login />
              </RedirectRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
