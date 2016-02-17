import React, { Component } from "react";

export class LoadingBar extends Component {
  render() {
    return (
      <div className="loading-bar">
        <div className="loader">
          <div className="bar"></div>
        </div>
      </div>
    );
  }
}
