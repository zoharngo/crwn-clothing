import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART
} from "./cart.actions.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
  type: ADD_ITEM_TO_CART,
  item
});

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  item
});

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  item
});
