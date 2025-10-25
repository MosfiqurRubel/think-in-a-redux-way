import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createTransaction,
  changeTransaction,
  editInActive,
} from "@/features/transaction/transactionSlice";
import Checkbox from "@/components/ui/Checkbox";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const TransactionForm = () => {
  const dispatch = useDispatch();
  const { editing, isLoading, isError } = useSelector(
    (state) => state.transaction
  );

  const empty = {
    name: "",
    type: "",
    amount: "",
  };

  const [data, setData] = useState(empty);
  const [editMode, setEditMode] = useState(false);

  // listen for edit mode active
  useEffect(() => {
    const { id, name, type, amount } = editing || {};

    if (id) {
      setEditMode(true);
      setData({ name, type, amount });
    } else {
      setEditMode(false);
      setData(empty); // ✅ just reset local state, no dispatch here
    }

    if (editMode) {
      document.querySelector("form")?.scrollIntoView({ behavior: "smooth" });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("data --- ", data);

    const payload = {
      ...data,
      amount: Number(data.amount),
    };

    if (editMode) {
      dispatch(
        changeTransaction({
          id: editing?.id,
          data: payload,
        })
      );
      setEditMode(false);
    } else {
      dispatch(createTransaction(payload));
    }

    // reset form
    setData(empty);
  };

  const handleCancel = () => {
    setData(empty);
    setEditMode(false);
    dispatch(editInActive()); // ✅ clear global editing state
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card p-5 rounded-lg w-full max-w-md shadow"
    >
      <h3 className="text-lg font-semibold mb-3">
        {editMode ? "Update" : "Add new"} transaction
      </h3>

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

      <div className="flex gap-4">
        <Button
          disabled={isLoading}
          type="submit"
          variant="primary"
          // text={editMode ? "Update Transaction" : "Add Transaction"}
          text={
            isLoading
              ? editMode
                ? "Updating..."
                : "Adding..."
              : editMode
              ? "Update Transaction"
              : "Add Transaction"
          }
          className="w-full capitalize"
        />
        {editMode && (
          <Button
            disabled={isLoading}
            variant="danger"
            text="Cancel Edit"
            className="w-full capitalize"
            onClick={handleCancel}
          />
        )}
      </div>

      {!isLoading && isError && (
        <p className="text-danger">There was an error occured!</p>
      )}

      {isError && (
        <p className="text-danger mt-2">Failed to save transaction.</p>
      )}
    </form>
  );
};

export default TransactionForm;
