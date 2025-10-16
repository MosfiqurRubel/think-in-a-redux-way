import { added } from "@/redux/books/actions";

const api = "http://localhost:9000/books";

const addBook = (book) => {
  return async (dispatch) => {
    // POST → নতুন ডাটা যোগ করা
    const response = await fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    const newBook = await response.json();

    dispatch(added(newBook));
  };
};

export default addBook;
