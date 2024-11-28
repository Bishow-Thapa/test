import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";
import { store, persistor } from "@shared/store/store";
import { lightTheme } from "@shared/utils/theme";
import "./index.css";
import App from "./App.jsx";

async function enableMocking() {
  if (import.meta.env.VITE_REACT_APP_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() =>
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider theme={lightTheme}>
            <App />
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </StrictMode>
  )
);
