import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  renderSubmitText = (language) => {
    return language === "us" ? "Save" : "Salvar";
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button type="submit" className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderSubmitText(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
