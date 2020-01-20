export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingItem) {
    return cartItems.map(cartItem =>
      cartItem.id === existingItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(item => item.id === cartItemToRemove.id);

  if (existingItem && existingItem.quantity > 1) {
    return cartItems.map(cartItem =>
      cartItem.id === existingItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1
          }
        : cartItem
    );
  }
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};
