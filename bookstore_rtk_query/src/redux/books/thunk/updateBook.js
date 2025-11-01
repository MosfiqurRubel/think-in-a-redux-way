import { updatedBook } from "@/redux/books/actions";

const api = "http://localhost:9000/books";

const updateBook = (id, book) => {
  return async (dispatch) => {
    // PATCH → আংশিক আপডেট
    const response = await fetch(`${api}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    const updateBook = await response.json();

    dispatch(updatedBook(updateBook));
  };
};

export default updateBook;
