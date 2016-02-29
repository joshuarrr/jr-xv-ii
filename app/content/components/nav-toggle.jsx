import React, { Component } from "react";
import store from '../../store';
require("../../styles/components/nav-toggle.css");

export class NavToggle extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }

  componentDidMount() {
    // force update when nav toggles isNavExpanded
    store.register(() => this.forceUpdate());
  }


  toggleNav = () => {
    store.isNavExpanded = !store.isNavExpanded;
    console.log('\n * click. \n');
    this.setState({ toggled: true });
  }

  render() {
    const isExpanded = store.isNavExpanded ? ' nav-is-expanded' : '';
    return (
      <button
        className="nav-toggle-btn"
        onClick={this.toggleNav}
      >
        <span className={'nav-toggle' + isExpanded} >
          <span className="inner">
            toggle menu
          </span>
        </span>
      </button>
    );
  }
}
