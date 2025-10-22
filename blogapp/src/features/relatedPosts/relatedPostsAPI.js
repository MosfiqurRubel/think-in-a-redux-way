import axios from "@/utils/axios";

export const getRelatedPosts = async ({ tags, id }) => {
  const limit = 5;
  let queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;

  const res = await axios.get(`/blogs?${queryString}`);
  return res.data;
};

// ?tags_like=html&tags_like=DS&id_ne=3&_limit=5
// ['tags_like=html', 'tags_like=DS']
