import { useDispatch } from "react-redux";
import {
  editActive,
  removeTransaction,
} from "@/features/transaction/transactionSlice";
import { SquarePen, Trash } from "lucide-react";
import Button from "@/components/ui/Button";

const TransactionItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const { id, name, type, amount } = transaction || {};

  const bgClass = type === "income" ? "bg-primary" : "bg-red-700";

  const handleEdit = () => {
    console.log(id);
    dispatch(editActive(transaction));
  };
  const handleRemove = () => {
    console.log(id);
    dispatch(removeTransaction(id));
  };

  return (
    <li
      className={`${bgClass} text-white p-3 rounded-lg flex justify-between items-center`}
    >
      <p>{name}</p>
      <div className="flex items-center gap-3">
        <p className="text-lg font-medium">৳ {amount}</p>

        <Button
          size="auto"
          variant="iconFlat"
          rounded="full"
          onClick={handleEdit}
        >
          <SquarePen size={18} />
        </Button>
        <Button
          size="auto"
          variant="iconFlatDanger"
          rounded="full"
          onClick={handleRemove}
        >
          <Trash size={18} />
        </Button>
      </div>
    </li>
  );
};

export default TransactionItem;
