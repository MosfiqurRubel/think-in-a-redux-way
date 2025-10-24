import axios from "@/utils/axios";

// ✅ fetch all transactions
export const getTransactions = async () => {
  const response = await axios.get("/transactions");
  return response.data;
};

// ✅ add transaction
export const addTransaction = async (data) => {
  const response = await axios.post("/transactions", data);
  return response.data;
};

// ✅ edit transaction
export const editTransaction = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data);
  return response.data;
};

// ✅ delete transaction
export const deleteTransaction = async (id) => {
  const response = await axios.delete(`/transactions/${id}`);
  return response.data;
};
