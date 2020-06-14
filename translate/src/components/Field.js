import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === "us" ? "Name" : "Nome";
    return (
      <div className="field">
        <label htmlFor="name">{text}</label>
        <input type="text" name="name"></input>
      </div>
    );
  }
}

export default Field;
