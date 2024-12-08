import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

// Lazy-loaded components
const Login = React.lazy(() => import("@features/auth/components/Login/Login"));
const Dashboard = React.lazy(() =>
  import("@features/dashboard/components/Dashboard")
);
const NotFoundPage = React.lazy(() =>
  import("@shared/components/NotFound/NotFoundPage")
);
const MainLayout = React.lazy(() =>
  import("@shared/components/DashbordLayout/MainLayout")
);
const EditProfile = React.lazy(() =>
  import("@features/profile/components/EditProfile")
);
const ChangePassword = React.lazy(() =>
  import("@features/profile/components/ChangePassword")
);
const BalanceManagement = React.lazy(() =>
  import("@features/balance/components/BalanceManagement")
);
const Spending = React.lazy(() =>
  import("@features/spending/components/Spending")
);
const Report = React.lazy(() => import("@features/report/components/Report"));

// Route Wrappers
import PrivateRoute from "./PrivateRoutes";
import RedirectRoute from "./RedirectRoutes";

const AppRoutes = () => {
  const loadingIndicator = (
    <Spin indicator={<LoadingOutlined spin />} size="large" />
  );

  return (
    <Router>
      <Suspense fallback={loadingIndicator}>
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
          <Route
            path="/balance"
            element={
              <PrivateRoute>
                <MainLayout>
                  <BalanceManagement />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/spending"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Spending />
                </MainLayout>
              </PrivateRoute>
            }
          />

          <Route
            path="/profile/edit"
            element={
              <PrivateRoute>
                <MainLayout>
                  <EditProfile />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/change-password"
            element={
              <PrivateRoute>
                <MainLayout>
                  <ChangePassword />
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
