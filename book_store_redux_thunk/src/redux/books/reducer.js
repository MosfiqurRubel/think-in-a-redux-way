import initialState from "./initialState";
import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./actionTypes";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  // const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), 0);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const newBook = {
        ...action.payload,
        id: nextBookId(state.books),
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };

    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };

    case DELETE_BOOK:
      return state.books.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
