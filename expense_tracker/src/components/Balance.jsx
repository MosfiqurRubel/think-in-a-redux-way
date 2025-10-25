import { useSelector } from "react-redux";
import numberWithCommas from "@/utils/numberWithCommas";

const Balance = () => {
  const { transactions } = useSelector((state) => state.transaction);

  const calculateAmount = (transactions) => {
    let totalAmount = 0;

    transactions.forEach((element) => {
      const { type, amount } = element;

      if (type === "income") {
        totalAmount += amount;
      } else {
        totalAmount -= amount;
      }
    });

    return totalAmount;
  };

  return (
    <div className="bg-primary text-white p-4 sm:p-6 w-full max-w-md rounded-lg">
      <p className="text-gray-300 text-sm mb-1">Your Current Balance</p>
      <h3 className="text-3xl font-bold">
        <span>৳</span>
        {transactions?.length > 0 ? (
          <span className="ml-1">
            {numberWithCommas(calculateAmount(transactions))}
          </span>
        ) : (
          0
        )}
      </h3>
    </div>
  );
};

export default Balance;
