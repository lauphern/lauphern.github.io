import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    debugger
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      //TODO finish
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
