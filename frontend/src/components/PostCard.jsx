import API from "../api";

const PostCard = ({ post, fetchPosts }) => {
  const handleDelete = async () => {
    await API.delete(`/${post._id}`);
    fetchPosts();
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      {post.image && <img src={post.image} width="200" />}

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostCard;