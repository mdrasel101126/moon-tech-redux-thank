import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  let selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        selectedProduct.quantity = selectedProduct.quantity + 1;
        let newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      let newCart = state.cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity = selectedProduct.quantity - 1;
        let index = state.cart.indexOf(selectedProduct);
        newCart.splice(index, 0, selectedProduct);
        return {
          ...state,
          cart: newCart,
        };
      }
      return {
        ...state,
        cart: [...newCart],
      };
    default:
      return state;
  }
};

export default productReducer;
