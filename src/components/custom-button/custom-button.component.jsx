import React from "react";
import "./custom-button.component.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sgin-in" : ""}  custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
