import { ADD_BOOK, DELETE_BOOK, LOADED, UPDATE_BOOK } from "./actionTypes";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

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

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};
