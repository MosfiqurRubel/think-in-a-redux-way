import axios from "@/utils/axios";

// ✅ fetch all blogs
export const getBlogs = async () => {
  const res = await axios.get("/blogs");
  return res.data;
};

// ✅ update like or saved status
export const updateBlog = async ({ id, data }) => {
  const res = await axios.patch(`/blogs/${id}`, data);
  return res.data;
};
