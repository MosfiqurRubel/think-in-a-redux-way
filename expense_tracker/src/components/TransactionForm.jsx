import React, { useState } from "react";
import Checkbox from "@/components/ui/Checkbox";

const TransactionForm = () => {
  const [input, setInput] = useState({ transaction_type: "income" });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="bg-gray-50 p-5 rounded-lg w-[320px] sm:w-[400px] shadow">
      <h3 className="text-lg font-semibold mb-3">Add new transaction</h3>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 mb-3">
        <label htmlFor="name" className="self-center text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="My Salary"
          className="border border-gray-300 rounded px-3 py-1 outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 mb-3">
        <label className="self-center text-sm font-medium">Type</label>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              type="radio"
              size="sm"
              name="transaction_type"
              id="income"
              value="income"
              checked={input.transaction_type === "income"}
              onChange={handleChange}
              color="primary"
            />
            <label htmlFor="transaction_type">Income</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              type="radio"
              size="sm"
              name="transaction_type"
              id="expense"
              value="expense"
              checked={input.transaction_type === "expense"}
              onChange={handleChange}
              color="primary"
            />
            <label htmlFor="transaction_type">Expense</label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 mb-3">
        <label htmlFor="amount" className="self-center text-sm font-medium">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          placeholder="300"
          className="border border-gray-300 rounded px-3 py-1 outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-indigo-800 transition"
      >
        Add Transaction
      </button>

      <button
        type="button"
        className="hidden mt-3 w-full bg-danger text-white py-2 rounded-lg hover:bg-red-800 transition"
      >
        Cancel Edit
      </button>
    </form>
  );
};

export default TransactionForm;
