import initialState from "./initialState";
import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./actionTypes";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: nextBookId(state),
        },
      ];

    case UPDATE_BOOK:
      return {
        ...state,
        books: [
          ...state.books,
          state.books.map((book) =>
            book.id === action.payload ? action.payload : book
          ),
        ],
      };

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
