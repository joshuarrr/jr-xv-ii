import React, { Component } from "react";
require("../../styles/components/dev-guides.css");

export class Guides extends Component {

  render() {
    return (
      <div className="guides">
        <span className="guide v center" />
        <span className="guide v left" />
        <span className="guide v right" />
      </div>
    );
  }
}
