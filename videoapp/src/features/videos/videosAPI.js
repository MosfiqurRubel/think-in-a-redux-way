import axios from "@/utils/axios";

// ?tags_like=javascript&q=react

export const getVideos = async (tags, search) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const res = await axios.get(`/videos?${queryString}`);
  return res.data;
};
