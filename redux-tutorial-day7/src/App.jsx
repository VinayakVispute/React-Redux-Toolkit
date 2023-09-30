import "./index.css";
import { Route, Routes, Navigate } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import UsersList from "./features/users/usersList";
import UserPage from "./features/users/UserPage";
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="post">
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
          </Route>
          <Route path="user">
            <Route index element={<UsersList />} />
            <Route path=":userId" element={<UserPage />} />
          </Route>
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
