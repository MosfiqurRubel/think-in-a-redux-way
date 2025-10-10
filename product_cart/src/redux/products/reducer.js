import initialState from "./initialState";
import {
  ADD_PRODUCT,
  DECREASE_PRODUCT_QTY,
  INCREASE_PRODUCT_QTY,
  INCREASE_PRODUCT_QTY_BULK,
} from "./actionTypes";

const nextProductId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    -1
  );
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = {
        ...action.payload,
        id: nextProductId(state.products),
      };
      return {
        ...state,
        products: [...state.products, newProduct],
      };

    case DECREASE_PRODUCT_QTY:
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload && p.quantity > 0
            ? { ...p, quantity: p.quantity - 1 }
            : p
        ),
      };

    case INCREASE_PRODUCT_QTY:
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };

    // ✅ Bulk restore logic (newly added)
    case INCREASE_PRODUCT_QTY_BULK:
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload.id
            ? { ...p, quantity: p.quantity + action.payload.qty }
            : p
        ),
      };

    default:
      return state;
  }
};

export default reducer;
