import { combineReducers, createStore } from "redux";
import bookingReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
});

export const store = createStore(rootReducer);
