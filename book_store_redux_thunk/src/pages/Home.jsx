import { useState } from "react";
import BookForm from "@/components/BookForm";
import BookList from "@/components/BookList";

const Home = () => {
  const [editBook, setEditBook] = useState(null);

  return (
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8 items-start">
      <BookList setEditBook={setEditBook} />
      <BookForm editBook={editBook} setEditBook={setEditBook} />
    </div>
  );
};

export default Home;
