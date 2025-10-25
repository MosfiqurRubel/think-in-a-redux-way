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
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const TransactionForm = () => {
  const dispatch = useDispatch();
  const { editing, isLoading, isError } = useSelector(
    (state) => state.transaction
  );

  const empty = { name: "", type: "", amount: "" };
  const [data, setData] = useState(empty);
  const [editMode, setEditMode] = useState(false);

  // listen for edit mode active
  useEffect(() => {
    const { id, name, type, amount } = editing || {};

    if (id) {
      setEditMode(true);
      setData({ name, type, amount });

      // ✅ scroll + highlight when edit mode starts
      document.querySelector("form")?.scrollIntoView({ behavior: "smooth" });
      toast("Editing mode activated ✏️", { icon: "🟢" });
    } else {
      setEditMode(false);
      setData(empty);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { ...data, amount: Number(data.amount) };

    try {
      if (editMode) {
        await dispatch(
          changeTransaction({
            id: editing?.id,
            data: payload,
          })
        ).unwrap();

        toast.success("Transaction updated successfully ✅");
        setEditMode(false);
      } else {
        await dispatch(createTransaction(payload)).unwrap();
        toast.success("Transaction added successfully 🎉");
      }
      setData(empty);
    } catch (err) {
      toast.error("Something went wrong ❌");
      console.error(err);
    }
  };

  const handleCancel = () => {
    setData(empty);
    setEditMode(false);
    dispatch(editInActive());
    toast("Edit cancelled ❎", { icon: "⚠️" });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key={editMode ? "edit" : "add"}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className={`bg-card p-5 rounded-lg w-full max-w-md shadow relative ${
          editMode ? "ring-2 ring-primary ring-offset-2" : ""
        }`}
      >
        <h3 className="text-lg font-semibold mb-3">
          {editMode ? "Update" : "Add new"} transaction
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 mb-3">
          <Label text="Name" htmlFor="name" required className="self-center" />
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
                required
                checked={data.type === "income"}
                onChange={handleChange}
              />
              <Label text="Income" htmlFor="income" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                type="radio"
                size="sm"
                name="type"
                id="expense"
                value="expense"
                color="primary"
                checked={data.type === "expense"}
                onChange={handleChange}
              />
              <Label text="Expense" htmlFor="expense" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 mb-3">
          <Label text="Amount" htmlFor="amount" required />
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
            text={editMode ? "Update Transaction" : "Add Transaction"}
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
          <p className="text-danger mt-3 text-sm">
            There was an error occurred!
          </p>
        )}
      </motion.form>
    </AnimatePresence>
  );
};

export default TransactionForm;
