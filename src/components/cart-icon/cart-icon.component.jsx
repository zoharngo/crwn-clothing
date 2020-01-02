import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import "./cart-icon.component.scss";

const CartIcon = ({ actions, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={actions.toggleCartHidden}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      toggleCartHidden: () => dispatch(toggleCartHidden())
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
