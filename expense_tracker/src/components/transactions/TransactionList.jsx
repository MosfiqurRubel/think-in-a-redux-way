import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTransactions } from "@/features/transaction/transactionSlice";
import TransactionItem from "./TransactionItem";
import Loading from "@/components/ui/Loading";

const TransactionList = () => {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Loading loadingText={error} />;

  if (!isError && !isLoading && transactions?.length === 0) {
    content = <div className="col-span-12">No transactions found!</div>;
  }
  if (!isError && !isLoading && transactions?.length > 0) {
    content = transactions.map((transaction) => (
      <TransactionItem key={transaction.id} transaction={transaction} />
    ));
  }

  return (
    <div className="w-full max-w-md max-h-[500px] overflow-y-auto">
      <p className="text-left text-lg font-semibold my-3">Your Transactions:</p>
      <ul className="space-y-3">{content}</ul>
    </div>
  );
};

export default TransactionList;
