import React, { Component } from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from "./error-boundary.styles";

export class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true
    };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={"https://i.imgur.com/yW2W9SC.png"} />
        <ErrorImageText>Sorry this page is broken</ErrorImageText>
      </ErrorImageOverlay>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
