import React, { Component } from "react";
import { ResponsiveContainer } from "./responsive-container";
import { ResponsiveImage } from "./responsive-image";
require("../../styles/components/hero.css");

export class Hero extends Component {
  render() {
    return (
      <ResponsiveContainer
        class={ 'hero' }
      >
        <ResponsiveImage
          class="hero-image "
          src="lines-cover.jpg"
          ref="imgContainer"
          loadMsg
          loadBar
        />
      </ResponsiveContainer>
    );
  }
}
