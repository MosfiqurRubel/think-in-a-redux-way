import axios from "@/utils/axios";

export const deleteJob = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response.data;
};
