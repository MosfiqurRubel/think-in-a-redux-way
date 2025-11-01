import initialState from "./initialState";
import { ADDED_BOOK, DELETED_BOOK, LOADED, UPDATED_BOOK } from "./actionTypes";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), 0);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return {
        ...state,
        books: action.payload,
      };

    case ADDED_BOOK:
      const newBook = {
        ...action.payload,
        id: nextBookId(state.books),
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };

    case UPDATED_BOOK:
      return {
        ...state,
        books: state.books.map((b) =>
          b.id === action.payload.id ? action.payload : b
        ),
      };

    case DELETED_BOOK:
      return {
        ...state,
        books: state.books.filter((b) => b.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
