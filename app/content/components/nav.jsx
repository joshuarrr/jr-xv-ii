import React, { Component } from "react";
import { Link } from "react-router";
import navData from '../../data/nav.js';
import store from '../../store';
require("../../styles/components/nav.css");

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navUpdate: false
    };
  }

  componentDidMount() {
    // listen for escape key
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (e) => {
    if (e.keyCode === 27) {
      store.isNavExpanded = !store.isNavExpanded;
      // console.log('\n' + '* store.isNavExpanded = ' + store.isNavExpanded + '\n\n');
    }
  }

  handleClick() {
    store.isNavExpanded = !store.isNavExpanded;
  }

  render() {
    const isNavExpanded = store.isNavExpanded ? ' nav-is-expanded' : '';
    const links = navData.map(function exp(l) {
      return (
        <li className="nav-item"
          key={ l.to }
        >
          <Link
            className="nav-link"
            activeClassName=" active"
            to={ l.to }
            tabIndex="3"
          >
            { l.title }
          </Link>
        </li>
      );
    });

    return (
        <nav
          className={ 'site-nav' + isNavExpanded }
          onClick={ this.handleClick }
        >
          <ul
            key="navLinks"
            className="nav-links"
          >
            { links }
          </ul>
      </nav>
    );
  }
}
