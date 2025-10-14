import initialState from "./initialState";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL,
  DECREMENT_QTY,
  INCREMENT_QTY,
  REMOVE_FROM_CART,
} from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existing = state.cartItems.find((item) => item.id === product.id);

      let updatedCart;

      if (existing) {
        updatedCart = state.cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
      }

      return {
        ...state,
        cartItems: updatedCart,
        totalItems: state.totalItems + 1,
      };
    }

    case REMOVE_FROM_CART:
      const removeItem = state.cartItems.find((r) => r.id === action.payload);

      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - (removeItem?.quantity || 0),
      };

    case INCREMENT_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalItems: Math.max(state.totalItems + 1, 0),
      };

    case DECREMENT_QTY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
        totalItems: Math.max(state.totalItems - 1, 0),
      };

    case CALCULATE_TOTAL:
      const total = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { ...state, totalAmount: total };

    default:
      return state;
  }
};

export default reducer;
