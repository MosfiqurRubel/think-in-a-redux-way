import { useState } from "react";
import BookForm from "@/components/BookForm";
import BookList from "@/components/BookList";

const Home = () => {
  const [editBook, setEditBook] = useState(null);

  return (
    <>
      <BookList setEditBook={setEditBook} />
      <BookForm editBook={editBook} setEditBook={setEditBook} />
    </>
  );
};

export default Home;
