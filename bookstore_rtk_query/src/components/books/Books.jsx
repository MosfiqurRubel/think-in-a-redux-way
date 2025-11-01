import { useGetBooksQuery } from "@/features/api/apiSlice";
import Heading from "@/components/ui/Heading";
import FilterButtons from "./FilterButtons";
import Book from "./Book";
import BookLoader from "@/components/ui/loaders/BookLoader";
import Error from "@/components/ui/Error";

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  // decide what to render
  let content = null;

  if (isLoading) content = <BookLoader />;
  if (!isLoading && isError) content = <Error />;
  if (!isLoading && !isError && books?.length === 0)
    content = <Error message="No book found!" />;
  if (!isLoading && !isError && books?.length > 0)
    content = books.map((book) => <Book key={book.id} book={book} />);

  return (
    <section className="order-2 xl:-order-1">
      <header className="flex items-center justify-between mb-12">
        <Heading text="Book List" className="text-heading mt-2" />
        <FilterButtons />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 mx-auto min-h-60">
        {content}
      </div>
    </section>
  );
};

export default Books;
