import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

const initialState = {
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  console.log("state ", state);
  switch (action.type) {
    case ADD_BOOKING:
      if (state.bookings.length >= 3) return state; // limit check

      console.log("new state", {
        ...state,
        bookings: [...state.bookings, action.payload], // এখানে store এ data save হচ্ছে
      });
      return {
        ...state,
        bookings: [...state.bookings, action.payload], // এখানে store এ data save হচ্ছে
      };

    case REMOVE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter((b) => b.id !== action.payload),
      };

    default:
      return state;
  }
};

export default bookingReducer;
