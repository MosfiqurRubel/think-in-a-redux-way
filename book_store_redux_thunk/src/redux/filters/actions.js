import { SEARCH_BOOK, FILTER_BOOK } from "./actionTypes";

export const searchBook = (searchTerm) => {
  return {
    type: SEARCH_BOOK,
    payload: searchTerm,
  };
};

export const selectedBook = (status) => {
  return {
    type: FILTER_BOOK,
    payload: status, // "all" | "featured"
  };
};
