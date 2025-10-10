import {
  ADD_PRODUCT,
  DECREASE_PRODUCT_QTY,
  INCREASE_PRODUCT_QTY,
  INCREASE_PRODUCT_QTY_BULK,
} from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const decreaseProductQty = (id) => {
  return {
    type: DECREASE_PRODUCT_QTY,
    payload: id,
  };
};

export const increaseProductQty = (id) => {
  return {
    type: INCREASE_PRODUCT_QTY,
    payload: id,
  };
};

export const increaseProductQtyBulk = (id, qty) => {
  return {
    type: INCREASE_PRODUCT_QTY_BULK,
    payload: { id, qty },
  };
};
