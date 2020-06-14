import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select Language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("us")}
        ></i>
        <i
          className="flag br"
          onClick={() => this.context.onLanguageChange("br")}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
