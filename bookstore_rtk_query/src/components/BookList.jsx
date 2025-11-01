import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchBooks from "@/redux/books/thunk/fetchBooks";
import deleteBook from "@/redux/books/thunk/deleteBook";
import Heading from "@/components/ui/Heading";
import BookCard from "@/components/BookCard";
import FilterButtons from "@/components/FilterButtons";

const BookList = ({ setEditBook }) => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  const { search, status } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      status === "all" || (status === "featured" && book.featured);

    return matchesSearch && matchesFilter;
  });

  const handleEdit = (book) => setEditBook(book);
  const handleDelete = (id) => dispatch(deleteBook(id));

  return (
    <section className="order-2 xl:-order-1">
      <header className="flex items-center justify-between mb-12">
        <Heading text="Book List" className="text-heading mt-2" />
        <FilterButtons />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 mx-auto min-h-60">
        {filteredBooks.length ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="text-center mt-10 text-gray-500">No Book Found!</p>
        )}
      </div>
    </section>
  );
};

export default BookList;
