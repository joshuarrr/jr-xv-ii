import React, { Component } from "react";
import { ResponsiveContainer } from "./responsive-container";
import { ResponsiveImage } from "./responsive-image";

export class Project extends Component {
	static propTypes = {
		src: React.PropTypes.string,
		class: React.PropTypes.string,
		index: React.PropTypes.number,
		role: React.PropTypes.string,
		tech: React.PropTypes.string,
		title: React.PropTypes.string
	}

	render() {
		return (
			<div className="project-wrap">
				<div className={ 'project ' + this.props.class }>
					{ this.props.title &&
						<h2 className="project-title">
							{ this.props.title }
						</h2>
					}
					<ResponsiveContainer
						class="project-image"
						key={'rc-' + this.props.index}
					>
						<ResponsiveImage
							class={ 'img-wrap ' + this.props.class + ' ' + ' img-' + this.props.index}
							src={ this.props.src }
						/>
					</ResponsiveContainer>
					<div className="project-caption">
						{ this.props.role &&
						<dl className="project-role">
							<dt>Role:</dt>
							<dd>{ this.props.role }</dd>
						</dl>
						}
						{ this.props.tech &&
						<dl className="project-tech">
							<dt>Tech:</dt>
							<dd>{ this.props.tech }</dd>
						</dl>
						}
					</div>
				</div>
			</div>
		);
	}
}
