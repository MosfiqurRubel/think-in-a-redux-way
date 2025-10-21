import axios from "@/utils/axios";

// ✅ Get single blog post
export const getBlog = async (id) => {
  const res = await axios.get(`/blogs/${id}`);
  return res.data;
};
