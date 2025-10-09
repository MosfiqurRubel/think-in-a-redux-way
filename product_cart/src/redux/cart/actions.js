import {
  ADD_TO_CART,
  CALCULATE_TOTAL,
  DECREMENT_QTY,
  INCREMENT_QTY,
  REMOVE_FROM_CART,
} from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const incrementQty = (id) => {
  return {
    type: INCREMENT_QTY,
    payload: id,
  };
};

export const decrementQty = (id) => {
  return {
    type: DECREMENT_QTY,
    payload: id,
  };
};

export const calculateTotal = () => {
  return {
    type: CALCULATE_TOTAL,
  };
};
