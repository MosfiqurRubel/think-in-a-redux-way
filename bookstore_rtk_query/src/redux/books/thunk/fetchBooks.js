import { loaded } from "@/redux/books/actions";

const api = "http://localhost:9000/books";

const fetchBooks = async (dispatch) => {
  // GET → ডাটা পড়া
  const response = await fetch(api);
  const books = await response.json();

  dispatch(loaded(books));
};

export default fetchBooks;
