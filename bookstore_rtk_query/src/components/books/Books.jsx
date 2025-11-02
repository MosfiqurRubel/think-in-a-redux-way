import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useGetBooksQuery } from "@/features/api/apiSlice";
import Heading from "@/components/ui/Heading";
import FilterButtons from "./FilterButtons";
import Book from "./Book";
import BookLoader from "@/components/ui/loaders/BookLoader";
import Error from "@/components/ui/Error";

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  const { search } = useOutletContext();
  const [status, setStatus] = useState("all");

  // decide what to render
  let content = null;

  if (isLoading) content = <BookLoader />;
  if (!isLoading && isError) content = <Error />;
  if (!isLoading && !isError && books?.length === 0)
    content = <Error message="No books found!" />;
  if (!isLoading && !isError && books?.length > 0) {
    let filteredBooks = books;

    // 🔹 Client-side search
    if (search) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.name.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase()) ||
          book.price.toString().includes(search)
      );
    }

    // 🔹 Filter by Featured
    if (status === "featured") {
      filteredBooks = filteredBooks.filter((book) => book.featured);
    }

    content =
      filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <Error message="No matching books found!" />
      );
  }

  return (
    <section className="order-2 xl:-order-1">
      <header className="flex items-center justify-between mb-12">
        <Heading text="Book List" className="text-heading mt-2" />
        <FilterButtons status={status} setStatus={setStatus} />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 mx-auto min-h-60">
        {content}
      </div>
    </section>
  );
};

export default Books;
