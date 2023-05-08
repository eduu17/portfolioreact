import React, { Component } from "react";
import { LanguageSwitcher } from "./translate";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="App">
          <LanguageSwitcher />
        </div>
      </>
    );
  }
}
