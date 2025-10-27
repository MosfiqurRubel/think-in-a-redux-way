import axios from "@/utils/axios";

export const editJob = async (id, data) => {
  const response = await axios.put(`/jobs/${id}`, data);
  return response.data;
};
