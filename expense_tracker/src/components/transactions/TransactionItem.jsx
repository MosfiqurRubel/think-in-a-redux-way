import { SquarePen, Trash } from "lucide-react";

const TransactionItem = ({ type, title, amount }) => {
  const bgClass = type === "income" ? "bg-primary" : "bg-danger";

  return (
    <li
      className={`${bgClass} text-white p-3 rounded-lg flex justify-between items-center`}
    >
      <p>{title}</p>
      <div className="flex items-center gap-3">
        <p className="text-lg font-medium">৳ {amount}</p>
        <button className="hover:text-blue-200 transition">
          <SquarePen size={18} />
        </button>
        <button className="hover:text-blue-200 transition">
          <Trash size={18} />
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
