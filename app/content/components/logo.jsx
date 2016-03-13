import React, { Component } from "react";
import { Link } from "react-router";
require("../../styles/components/logo.css");
import store from '../../store';

export class Logo extends Component {
  toggleNav = () => {
    if (store.isNavExpanded) {
      store.isNavExpanded = false;
    }
  }

  render() {
    return (
      <h1 className="site-logo">
        <Link
          to="/home"
          className="site-logo-link"
          activeClassName="active"
          tabIndex="-1"
          onClick={this.toggleNav}
        >
          <span className="site-logo-link-text">
            Joshuar
          </span>
          <span className="site-logo-j">
            j
          </span>
        </Link>
      </h1>
    );
  }
}
