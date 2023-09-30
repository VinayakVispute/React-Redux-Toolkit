import { useSelector } from "react-redux";
import { selectPostByIds, useGetPostsQuery } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery();

  const orderedPostsIds = useSelector(selectPostByIds);

  console.log(orderedPostsIds);

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = orderedPostsIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
