import { deletedBook } from "@/redux/books/actions";

const api = "http://localhost:9000/books";

const deleteBook = (id) => {
  return async (dispatch) => {
    await fetch(`${api}/${id}`, {
      method: "DELETE",
    });

    dispatch(deletedBook(id));
  };
};

export default deleteBook;
