import "./index.css";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
AddPostForm;
function App() {
  return (
    <div className="App">
      <PostsList />
      <AddPostForm />
    </div>
  );
}

export default App;
