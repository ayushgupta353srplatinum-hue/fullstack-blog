import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME?.trim(),
  api_key: process.env.API_KEY?.trim(),
  api_secret: process.env.API_SECRET?.trim(),
});

export default cloudinary;