import React from "react";
import { connect } from "react-redux";
import "./cart-icon.component.scss";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ actions, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={actions.toggleCartHidden}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

function mapStateToProps(state) {
  return {
    itemsCount: selectCartItemsCount(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      toggleCartHidden: () => dispatch(toggleCartHidden())
    }
  };
}
