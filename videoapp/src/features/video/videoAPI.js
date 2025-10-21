import axios from "@/utils/axios";

// ✅ Get single video
export const getVideo = async (id) => {
  const res = await axios.get(`/videos/${id}`);
  return res.data;
};

// ✅ Update likes/dislikes
export const updateLikeDislike = async ({ id, data }) => {
  const res = await axios.patch(`/videos/${id}`, data);
  return res.data;
};
