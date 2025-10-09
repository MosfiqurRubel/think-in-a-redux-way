import {
  ADD_TO_CART,
  CALCULATE_TOTAL,
  DECREMENT_QTY,
  INCREMENT_QTY,
  REMOVE_FROM_CART,
} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existing = state.cartItems.find((item) => item.id === product.id);

      let updatedCart;

      if (existing) {
        updatedCart = state.cartItems.map((item) =>
          item.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
      }

      return { ...state, cartItems: updatedCart };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case INCREMENT_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREMENT_QTY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
              : item
          )
          .filter((item) => item.quantity > 0),
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
