import { SquarePen, Trash } from "lucide-react";
import Button from "@/components/ui/Button";

const TransactionItem = ({ transaction }) => {
  const { name, type, amount } = transaction || {};

  const bgClass = type === "income" ? "bg-primary" : "bg-red-700";

  const handleLike = () => {
    //
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
          onClick={handleLike}
        >
          <SquarePen size={18} />
        </Button>
        <Button
          size="auto"
          variant="iconFlatDanger"
          rounded="full"
          onClick={handleLike}
        >
          <Trash size={18} />
        </Button>
      </div>
    </li>
  );
};

export default TransactionItem;
