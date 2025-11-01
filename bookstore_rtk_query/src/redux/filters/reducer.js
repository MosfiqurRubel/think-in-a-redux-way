import initialState from "./initialState";
import { FILTER_BOOK, SEARCH_BOOK } from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOK:
      return {
        ...state,
        search: action.payload,
      };

    case FILTER_BOOK:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
