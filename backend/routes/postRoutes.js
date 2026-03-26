import express from "express";
import { createPost, getPosts, deletePost } from "../controllers/postController.js";
import upload from "../config/multer.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", upload.single("image"), createPost);
router.delete("/:id", deletePost);

export default router;