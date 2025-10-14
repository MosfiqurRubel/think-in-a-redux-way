import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./actionTypes";

export const added = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const updateBook = (book) => {
  return {
    type: UPDATE_BOOK,
    payload: book,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: bookId,
  };
};
