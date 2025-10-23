import axios from "@/utils/axios";

// ✅ Get single blog post
export const getBlog = async (id) => {
  const res = await axios.get(`/blogs/${id}`);
  return res.data;
};

// Update blog likes (increment)
export const updateLike = async ({ id, data }) => {
  const res = await axios.patch(`/blogs/${id}`, data);

  return res.data;
};

// ✅ Update blog save toggle
export const toggleSave = async ({ id, data }) => {
  const res = await axios.patch(`/blogs/${id}`, data);
  return res.data;
};
