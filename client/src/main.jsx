import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ResizableProvider from "./context/ResizableContext.jsx";
import CountProvider from "./context/CountContext.jsx";
import DataProvider from "./context/DataContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResizableProvider>
      <DataProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </DataProvider>
    </ResizableProvider>
  </React.StrictMode>
);
