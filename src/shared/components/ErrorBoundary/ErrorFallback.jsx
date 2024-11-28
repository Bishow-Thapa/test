import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div
    style={{
      padding: "20px",
      border: "1px solid red",
      backgroundColor: "#fdd",
    }}
  >
    <h2>Something went wrong:</h2>
    <p>{error.message}</p>
    <button
      onClick={resetErrorBoundary}
      style={{ padding: "10px 20px", backgroundColor: "#ddd" }}
    >
      Try Again
    </button>
  </div>
);

export default ErrorFallback;
