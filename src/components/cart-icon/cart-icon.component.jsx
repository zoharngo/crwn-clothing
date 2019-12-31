import React from "react";
import { connect } from "react-redux";
import "./cart-icon.component.scss";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ actions }) => {
  return (
    <div className="cart-icon" onClick={() => actions.toggleCartHidden()}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CartIcon);

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      toggleCartHidden: () => dispatch(toggleCartHidden())
    }
  };
}
