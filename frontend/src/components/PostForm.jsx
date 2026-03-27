import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/posts";

const PostForm = ({ fetchPosts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

   await axios.post(API, formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

    setTitle("");
    setContent("");
    setImage(null);

    fetchPosts();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button>Create Post </button>
    </form>
  );
};

export default PostForm;
