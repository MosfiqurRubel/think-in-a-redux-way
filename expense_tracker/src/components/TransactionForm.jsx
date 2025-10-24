import React, { useState } from "react";
import Checkbox from "@/components/ui/Checkbox";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const TransactionForm = () => {
  const [input, setInput] = useState({ transaction_type: "income" });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="bg-card p-5 rounded-lg w-[320px] sm:w-[400px] shadow">
      <h3 className="text-lg font-semibold mb-3">Add new transaction</h3>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 mb-3">
        <Label text="name" htmlFor="name" className="self-center" />
        <Input
          id="name"
          name="name"
          placeholder="My Salary"
          onChange={handleChange}
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
        <Label text="Amount" htmlFor="amount" className="self-center" />
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="300"
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        text="Add Transaction"
        className="w-full capitalize"
      />

      {/* <Button
        type="submit"
        variant="danger"
        text="Cancel Edit"
        className="w-full capitalize"
      /> */}
    </form>
  );
};

export default TransactionForm;
