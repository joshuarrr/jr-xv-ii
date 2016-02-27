import React, { Component } from "react";
import { ResponsiveContainer } from "./responsive-container";
import { ResponsiveImage } from "./responsive-image";

export class Project extends Component {
	static propTypes = {
		src: React.PropTypes.string,
		class: React.PropTypes.string,
		index: React.PropTypes.number
	}

	render() {
    return (
      <div className="project-wrap">
        <div className="project" ref="project">

          <ResponsiveContainer
            class={ 'rc rc-' + this.props.index + ' ' }
            key={'rc-' + this.props.index}
            ref="imgContainer"
          >
            <ResponsiveImage
              class={ 'img-wrap ' + this.props.class + ' ' + ' img-' + this.props.index}
              src={ this.props.src }
              ref="imgContainer"
            />
          </ResponsiveContainer>
        </div>
      </div>
    );
	}
}
