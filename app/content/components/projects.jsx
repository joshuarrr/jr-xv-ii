import React, { Component } from "react";
import { Project } from './project';

export class Projects extends Component {
	static propTypes = {
		data: React.PropTypes.array,
		category: React.PropTypes.string
	}

	render() {
		const data = this.props.data;

		const projects = data.map(function exp(project, index) {
			return (
				<Project
					id={ project.id }
					class={ project.class }
					title={ project.projectTitle }
					description={ project.projectDescription }
					index={ index }
					key={ 'project-' + index }
					cover={ project.cover }
					role={ project.role }
					tech={ project.tech }
					data={ data }
				/>
			);
		});
		return (
			<div className="projects">
				{ projects }
			</div>
		);
	}
}
