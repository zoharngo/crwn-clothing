import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart
} from "../../redux/cart/cart.actions";
import "./checkout-item.component.scss";

const CheckoutItem = ({
  cartItem,
  actions: { clearItemFromCart, addItemToCart, removeItemFromCart }
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name} </span>
      <span className="quantity">
        <div onClick={() => removeItemFromCart(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItemToCart(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <div
        onClick={() => clearItemFromCart(cartItem)}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addItemToCart: item => dispatch(addItemToCart(item)),
      removeItemFromCart: item => dispatch(removeItemFromCart(item)),
      clearItemFromCart: itemID => dispatch(clearItemFromCart(itemID))
    }
  };
}
export default connect(null, mapDispatchToProps)(CheckoutItem);
