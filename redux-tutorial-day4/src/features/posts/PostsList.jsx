import { useSelector } from "react-redux";
import { selectPostByIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const orderedPostsIds = useSelector(selectPostByIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  console.log(orderedPostsIds);
  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    content = orderedPostsIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
