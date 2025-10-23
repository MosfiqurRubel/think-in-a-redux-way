import axios from "@/utils/axios";

// ✅ fetch all blogs
export const getBlogs = async () => {
  const res = await axios.get("/blogs");
  return res.data;
};
