import React, { Component } from "react";
import { ResponsiveContainer } from "./responsive-container";
import { ResponsiveImage } from "./responsive-image";
import { VelocityTransitionGroup } from "velocity-react";

export class Project extends Component {
	static propTypes = {
		id: React.PropTypes.string,
		class: React.PropTypes.string,
		cover: React.PropTypes.string,
		description: React.PropTypes.string,
		index: React.PropTypes.number,
		src: React.PropTypes.string,
		title: React.PropTypes.string,
		role: React.PropTypes.string,
		tech: React.PropTypes.string
	}

	constructor() {
		super();
		this.state = {
			isProjectExpanded: false
		};
	}

	handleClick = () => {
		this.setState({
			isProjectExpanded: !this.state.isProjectExpanded
		});
	}

	render() {
		const hasTitle = this.props.title ? ' has-title' : '';
		const isExpanded = this.state.isProjectExpanded ? ' expanded' : ' collapsed';

		return (
			<div className={ 'project ' + this.props.class + hasTitle + isExpanded }>

				{/* Title */}
				{ this.props.title &&
					<h2 className="project-title">
						{ this.props.title }
					</h2>
				}

				{/* Cover */}
				{ this.props.cover &&
					<a
						href={'#' + this.props.id }
						className="img-link"
						onClick={ this.handleClick }
					>
						<ResponsiveContainer
							class="project-cover-image"
							key={'rc-' + this.props.index}
						>
							<ResponsiveImage
								class={ 'img-wrap ' + this.props.class + ' ' + ' img-' + this.props.index}
								src={ this.props.cover }
							/>
						</ResponsiveContainer>
					</a>
				}

				{/* Project content */}
				{ this.state.isProjectExpanded &&
						<div className="project-content">
						<VelocityTransitionGroup
							enter={{
								animation: {
									opacity: [1, 0],
									maxHeight: '10000px'
								},
									duration: 1000
								}
							}
							leave={{
								animation: {
									opacity: [0, 1],
									maxHeight: '0'
								},
									duration: 1000
								}
							}
							runOnMount
						>
						{ this.props.description &&
							<div
								className="project-description text-measure"
								dangerouslySetInnerHTML={{__html: this.props.description}}
							/>
						}

						{/* Caption */}
						{ (this.props.role || this.props.tech) &&
							<div className="project-caption">

								{/* Role */}
								{ this.props.role &&
								<dl className="project-role">
									<dt>Role:</dt>
									<dd>{ this.props.role }</dd>
								</dl>
								}

								{/* Tech */}
								{ this.props.tech &&
								<dl className="project-tech">
									<dt>Tech:</dt>
									<dd>{ this.props.tech }</dd>
								</dl>
								}

							</div>
						}
					</VelocityTransitionGroup>
						</div>
				}

			</div>
		);
	}
}
