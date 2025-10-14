import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";

const Home = () => {
  return (
    <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <BookList />
      <AddBookForm />
    </div>
  );
};

export default Home;
