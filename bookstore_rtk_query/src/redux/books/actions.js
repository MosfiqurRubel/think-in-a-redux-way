import { ADDED_BOOK, DELETED_BOOK, LOADED, UPDATED_BOOK } from "./actionTypes";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

export const added = (book) => {
  return {
    type: ADDED_BOOK,
    payload: book,
  };
};

export const updatedBook = (book) => {
  return {
    type: UPDATED_BOOK,
    payload: book,
  };
};

export const deletedBook = (id) => {
  return {
    type: DELETED_BOOK,
    payload: id,
  };
};
