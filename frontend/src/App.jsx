import { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./components/PostForm";
import "./index.css";

const API = `${import.meta.env.VITE_API_URL}/api/posts`;

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(API);
      setPosts(res.data);
    } catch (err) {
      console.log("ERROR FETCH:", err);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchPosts();
    } catch (err) {
      console.log("DELETE ERROR:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Blog App</h1>

      <PostForm fetchPosts={fetchPosts} />

      <div className="grid">
        {posts.map((post) => (
          <div className="card" key={post._id}>
            {post.image && <img src={post.image} />}

            <h2>{post.title}</h2>
            <p>{post.content}</p>

            <button
              className="delete-btn"
              onClick={() => deletePost(post._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;