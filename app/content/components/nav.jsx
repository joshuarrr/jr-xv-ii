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

    // force update when nav-toggle toggles isNavExpanded
    store.register(() => this.forceUpdate());
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (e) => {
    if (e.keyCode === 27) {
      store.isNavExpanded = !store.isNavExpanded;
      console.log('\n' + '* store.isNavExpanded = ' + store.isNavExpanded + '\n\n');
      this.setState({ navUpdate: true });
    }
  }

  handleClick() {
    store.isNavExpanded = !store.isNavExpanded;
  }

  render() {
    const isExpanded = store.isNavExpanded ? ' expanded' : '';
    const links = navData.map(function exp(l) {
      return (
        <li className="nav-item"
          key={ l.to }
        >
          <Link
            className="nav-link"
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
          className={ 'site-nav' + isExpanded }
          onClick={ this.handleClick } >
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
