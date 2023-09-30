import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchPosts } from "./features/posts/postsSlice";
import { fetchUsers } from "./features/users/usersSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
