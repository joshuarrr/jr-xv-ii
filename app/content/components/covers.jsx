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
        >
          <figure className="cover effect-bubba art">
            <ResponsiveContainer
              key={ "rc-1" }
              ref="imgContainer"
            >
              <ResponsiveImage
                ref="imgContainer"
                src="lines-07_crop"
              />
            </ResponsiveContainer>
            <figcaption className="description">
              <h2>
                Art
              </h2>
            </figcaption>
          </figure>
        </Link>

        {/* Photography */}
        <Link
        to="/photography"
        >
          <figure className="cover effect-bubba photography">
            <ResponsiveContainer
              key={ "rc-2" }
              ref="imgContainer"
            >
              <ResponsiveImage
                ref="imgContainer"
                src="mask.jpg"
              />
            </ResponsiveContainer>
            <figcaption className="description">
              <h2>
                Photography
              </h2>
            </figcaption>
          </figure>
        </Link>

        {/* Design */}
        <Link
          to="/design"
          >
          <figure className="cover effect-bubba design">
            <ResponsiveContainer
              key={ "rc-3" }
              ref="imgContainer"
            >
              <ResponsiveImage
                ref="imgContainer"
                src="colorpen.jpg"
              />
            </ResponsiveContainer>
            <figcaption className="description">
              <h2>
                Design
              </h2>
            </figcaption>
          </figure>
        </Link>

        {/* Code */}
        <Link
          to="/code"
        >
          <figure className="cover effect-bubba code">
            <ResponsiveContainer
              key={ "rc-4" }
              ref="imgContainer"
            >
              <ResponsiveImage
                ref="imgContainer"
                src="code.jpg"
              />
            </ResponsiveContainer>
            <figcaption className="description">
              <h2>
                Code
              </h2>
            </figcaption>
          </figure>
        </Link>
      </div>
    );
  }
}
