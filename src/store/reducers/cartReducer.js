import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItmes: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItmes.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        //referansı değiştiriyoruz ki state değişsin.
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItmes, { quantity: 1, product: payload }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItmes.filter((c) => c.product.id !== payload.id),
      };

    default:
      return state;
  }
}
