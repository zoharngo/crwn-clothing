import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.component.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_xnztIDRzYjwP19yvRNs4Mhwi00fD17t1is";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total price is 4 $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={token => {
        console.log(token);
        alert("Payment Successful");
      }}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
