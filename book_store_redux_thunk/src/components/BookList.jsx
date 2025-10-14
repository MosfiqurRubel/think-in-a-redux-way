import { useSelector } from "react-redux";
import Heading from "@/components/ui/Heading";
import BookCard from "@/components/BookCard";
import FilterButtons from "@/components/FilterButtons";

const BookList = () => {
  const books = useSelector((state) => state.books);

  console.log(books, "books");

  return (
    <section className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <Heading text="Book List" className="mt-2" />
        <FilterButtons />
      </div>

      <div className="lws-bookContainer">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BookList;
