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

// Pages
const BalancePage = React.lazy(() =>
  import("@features/balance/pages/BalancePage")
);
const SpendingPage = React.lazy(() =>
  import("@features/spending/pages/SpendingPage")
);
const ChatPage = React.lazy(() => import("@features/chat/pages/ChatPage"));
const ReportPage = React.lazy(() =>
  import("@features/report/pages/ReportPage")
);
const EditProfilePage = React.lazy(() =>
  import("@features/profile/pages/EditProfilePage")
);
const ChangePasswordPage = React.lazy(() =>
  import("@features/profile/pages/ChangePasswordPage")
);

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
                  <BalancePage />
                </MainLayout>
              </PrivateRoute>
            }
          />

          <Route
            path="/spending"
            element={
              <PrivateRoute>
                <MainLayout>
                  <SpendingPage />
                </MainLayout>
              </PrivateRoute>
            }
          />

          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <MainLayout>
                  <ChatPage />
                </MainLayout>
              </PrivateRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <MainLayout>
                  <ReportPage />
                </MainLayout>
              </PrivateRoute>
            }
          />

          <Route
            path="/profile/edit"
            element={
              <PrivateRoute>
                <MainLayout>
                  <EditProfilePage />
                </MainLayout>
              </PrivateRoute>
            }
          />

          <Route
            path="/profile/change-password"
            element={
              <PrivateRoute>
                <MainLayout>
                  <ChangePasswordPage />
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
