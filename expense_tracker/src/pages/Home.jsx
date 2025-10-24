import Balance from "@/components/Balance";
import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/transactions/TransactionList";

const Home = () => {
  return (
    <>
      <Balance />
      <TransactionForm />
      <TransactionList />
    </>
  );
};

export default Home;
