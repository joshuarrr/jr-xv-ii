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
		tech: React.PropTypes.string,
		data: React.PropTypes.array
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

		const data = this.props.data;
		// const str = JSON.stringify(data, null, 4);
		// console.log('* data = ', str + '\n');

		const thisProject = this.props.index;
		const subProject = data[thisProject].subprojects;

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

							{/* description */}
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

							{/* SubProjects */}
							{ subProject &&
								subProject.map(function exp(p, i) {
									const isMoblie = p.class === 'mobile' ? ' mobile' : '';
									return (
										<div className="sub-projects" key={ p.id }>
											<div className="sub-project">
												{/* Title */}
												{ p.title &&
													<h3 className="sub-project-title">
														{ p.title }
													</h3>
												}
												<div className="sub-project-content">
													{/* Details */}
													<div className="sub-project-details">
														{/* Description */}
														{ p.description &&
															<div
																className="sub-project-description"
																dangerouslySetInnerHTML={{__html: p.description}}
															/>
														}

														{/* Caption */}
														{ (p.role || p.tech) &&
															<div className="project-caption">

																{/* Role */}
																{ p.role &&
																<dl className="project-role">
																	<dt>Role:</dt>
																	<dd>{ p.role }</dd>
																</dl>
																}

																{/* Tech */}
																{ p.tech &&
																<dl className="project-tech">
																	<dt>Tech:</dt>
																	<dd>{ p.tech }</dd>
																</dl>
																}
															</div>
														}
													</div>

														{/* Image */}
														{ p.file &&
															<ResponsiveContainer class={ isMoblie }>
																<ResponsiveImage
																	class={ 'img-wrap ' + p.class + ' img-' + i}
																	src={ p.file }
																/>
															</ResponsiveContainer>
														}

														{/* Prototype */}
														{ p.prototype &&
															<div
																className="sub-project-prototype"
																dangerouslySetInnerHTML={{__html: p.prototype}}
															/>
														}
												</div>

											</div>
										</div>
									);
								})
							}

						</VelocityTransitionGroup>
					</div>
				}
			</div>
		);
	}
}
