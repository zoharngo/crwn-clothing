import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART
} from "./cart.actions.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item)
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.item.id
        )
      };

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.item)
      };

    default:
      return state;
  }
};

export default cartReducer;
