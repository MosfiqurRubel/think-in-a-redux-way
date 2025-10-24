import TransactionItem from "./TransactionItem";

const TransactionList = () => (
  <div className="w-[320px] sm:w-[400px] max-h-[500px] overflow-y-auto">
    <p className="text-left text-lg font-semibold my-3">Your Transactions:</p>
    <ul className="space-y-3">
      <TransactionItem type="income" title="Earned this month" amount="100" />
    </ul>
  </div>
);

export default TransactionList;
