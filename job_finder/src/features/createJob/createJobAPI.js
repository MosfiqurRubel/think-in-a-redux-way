import axios from "@/utils/axios";

export const addJob = async (data) => {
  const response = await axios.post("/jobs", data);
  return response.data;
};
