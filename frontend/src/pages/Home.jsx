import { useEffect, useState } from "react";
import API from "../api";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await API.get("/");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog App</h1>

      <PostForm fetchPosts={fetchPosts} />

      {posts.map((post) => (
        <PostCard key={post._id} post={post} fetchPosts={fetchPosts} />
      ))}
    </div>
  );
};

export default Home;