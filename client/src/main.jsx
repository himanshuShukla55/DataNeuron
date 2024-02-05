import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ResizableProvider from "./context/ResizableContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResizableProvider>
      <App />
    </ResizableProvider>
  </React.StrictMode>
);
