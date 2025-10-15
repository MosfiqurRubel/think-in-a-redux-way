import { useSelector } from "react-redux";
import Heading from "@/components/ui/Heading";
import BookCard from "@/components/BookCard";
import FilterButtons from "@/components/FilterButtons";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const { search, status } = useSelector((state) => state.filter);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      status === "all" || (status === "featured" && book.featured);

    return matchesSearch && matchesFilter;
  });

  console.log(books, "books");

  if (filteredBooks.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No Book Found!</p>;
  }

  return (
    <section className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <Heading text="Book List" className="text-heading mt-2" />
        <FilterButtons />
      </div>

      <div className="lws-bookContainer">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BookList;
