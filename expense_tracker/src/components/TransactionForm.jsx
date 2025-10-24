import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createTransaction } from "@/features/transaction/transactionSlice";
import Checkbox from "@/components/ui/Checkbox";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const TransactionForm = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.transaction);

  const empty = {
    name: "",
    type: "",
    amount: "",
  };
  const [data, setData] = useState(empty);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    console.log("data --- ", data);

    const payload = {
      ...data,
      amount: Number(data.amount),
    };

    dispatch(createTransaction(payload));

    setData(empty);
  };

  return (
    <form
      onSubmit={handleCreate}
      className="bg-card p-5 rounded-lg w-[320px] sm:w-[400px] shadow"
    >
      <h3 className="text-lg font-semibold mb-3">Add new transaction</h3>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 mb-3">
        <Label text="name" htmlFor="name" required className="self-center" />
        <Input
          id="name"
          name="name"
          value={data.name}
          placeholder="Enter name"
          required
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 mb-3">
        <Label text="Type" htmlFor="type" required className="self-center" />

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              type="radio"
              size="sm"
              name="type"
              id="income"
              value="income"
              color="primary"
              required={true}
              checked={data.type === "income"}
              onChange={handleChange}
            />

            <Label text="Income" htmlFor="type" className="self-center" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              type="radio"
              size="sm"
              name="type"
              id="expense"
              value="expense"
              checked={data.type === "expense"}
              onChange={handleChange}
              color="primary"
            />
            <Label text="Expense" htmlFor="type" className="self-center" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 mb-3">
        <Label
          text="Amount"
          htmlFor="amount"
          required
          className="self-center"
        />
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter amount"
          required
          value={data.amount}
          onChange={handleChange}
        />
      </div>

      <Button
        disabled={isLoading}
        type="submit"
        variant="primary"
        text="Add Transaction"
        className="w-full capitalize"
      />

      {!isLoading && isError && (
        <p className="text-danger">There was an error occured!</p>
      )}

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
