import initialState from "./initialState";
import { ADD_PRODUCT } from "./actionTypes";

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
        id: nextProductId(state.products),
        ...action.payload,
      };
      return {
        products: [...state.products, newProduct],
      };

    default:
      return state;
  }
};

export default reducer;
