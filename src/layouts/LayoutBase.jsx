import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class LayoutBase extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default LayoutBase;
