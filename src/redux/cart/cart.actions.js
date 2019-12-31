import { TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART } from "./cart.actions.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
  type: ADD_ITEM_TO_CART,
  item
});
