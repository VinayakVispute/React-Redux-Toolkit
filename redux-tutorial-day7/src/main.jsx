import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { extendedApiSlice } from "./features/posts/postsSlice.js";

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
