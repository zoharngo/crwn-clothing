import React from "react";
import { connect } from "react-redux";
import "./collection-item.component.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItemToCart } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, actions }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className="collection-footer">
        <span className="name"> {name} </span>
        <span className="price"> {price} </span>
      </div>
      <CustomButton onClick={() => actions.addItemToCart(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addItemToCart: item => dispatch(addItemToCart(item))
    }
  };
}
