import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);
