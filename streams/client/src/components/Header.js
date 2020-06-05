import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

export class Header extends Component {
  render() {
    return (
      <div className="ui pointing menu">
        <Link to="/" className="item">
          Streamy
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default Header;
