import React, { Component } from "react";
import { Link } from "react-router";
require("../../styles/components/logo.css");

export class Logo extends Component {

  render() {
    return (
      <h1 className="site-logo">
        <Link
          to="/home"
          className="site-logo-link"
          activeClassName="active"
          tabIndex="-1"
        >
          <span className="site-logo-link-text">
            Joshuar
          </span>
        </Link>
      </h1>
    );
  }
}
