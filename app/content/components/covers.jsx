import React, { Component } from "react";
import { ResponsiveContainer } from "./responsive-container";
import { ResponsiveImage } from "./responsive-image";
import { Link } from "react-router";
require("../../styles/components/covers.css");

export class Covers extends Component {
  render() {
    return (
      <div className="row covers">
        {/* Art */}
        <Link
          to="/art"
          className="cover"
        >
          <ResponsiveContainer
            key={ "rc-1" }
            ref="imgContainer"
          >
            <ResponsiveImage
              ref="imgContainer"
              src="lines-07_crop"
            />
          </ResponsiveContainer>
          <h2 className="cover-title">
            Art
          </h2>
        </Link>

        {/* Photography */}
        <Link
          to="/photography"
          className="cover"
        >
          <ResponsiveContainer
            key={ "rc-2" }
            ref="imgContainer"
          >
            <ResponsiveImage
              ref="imgContainer"
              src="mask.jpg"
            />
          </ResponsiveContainer>
          <h2 className="cover-title">
            Photography
          </h2>
        </Link>

        {/* Design */}
        <Link
          to="/design"
          className="cover"
        >
          <ResponsiveContainer
            key={ "rc-3" }
            ref="imgContainer"
          >
            <ResponsiveImage
              ref="imgContainer"
              src="colorpen.jpg"
            />
          </ResponsiveContainer>
          <h2 className="cover-title">
            Design
          </h2>
        </Link>

        {/* Code */}
        <Link
          to="/code"
          className="cover"
        >
          <ResponsiveContainer
            key={ "rc-4" }
            ref="imgContainer"
          >
            <ResponsiveImage
              ref="imgContainer"
              src="code.jpg"
            />
          </ResponsiveContainer>
          <h2 className="cover-title">
            Code
          </h2>
        </Link>
      </div>
    );
  }
}
