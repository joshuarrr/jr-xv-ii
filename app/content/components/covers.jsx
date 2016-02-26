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
        <figure className="cover effect-bubba art">
          <Link
          to="/art"
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
            <figcaption className="description">
              <h2>
                Art
              </h2>
            </figcaption>
          </Link>
        </figure>

        {/* Photography */}
        <figure className="cover effect-bubba photography">
          <Link
          to="/photography"
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
            <figcaption className="description">
              <h2>
                Photography
              </h2>
            </figcaption>
          </Link>
        </figure>

        {/* Design */}
        <figure className="cover effect-bubba design">
          <Link
            to="/design"
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
            <figcaption className="description">
              <h2>
                Design
              </h2>
            </figcaption>
          </Link>
        </figure>

        {/* Code */}
        <figure className="cover effect-bubba code">
          <Link
            to="/code"
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
            <figcaption className="description">
              <h2>
                Code
              </h2>
            </figcaption>
          </Link>
        </figure>
      </div>
    );
  }
}
