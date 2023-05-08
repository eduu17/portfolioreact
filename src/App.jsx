import React, { Component } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/header/header";
import Main from "./components/main/main";
//import Footer from "./components/footer/footer";

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Header />
        <Main />
      </>
    );
  }
}
