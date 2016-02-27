import React, { Component } from "react";
import { Project } from './project';

export class ProjectGroup extends Component {
	static propTypes = {
		index: React.PropTypes.number,
		data: React.PropTypes.array
	}

	showProjects() {
		const data = this.props.data;
		const thisGroup = this.props.index;
		const pieces = data[thisGroup].pieces;
		console.log('* pieces = ' + pieces + '\n');
		if (pieces) {
			const projects = pieces.map(function ext(p, i) {
				return (
					<Project
						class={ p.class }
						description={ p.description }
						id={ p.id }
						index={ i }
						key={ 'piece-' + i }
						src={ p.file }
						title={ p.title }
					/>
				);
			});
		} else {
			const projects = data.map(function ext(p, i) {
				return (
					<Project
						class={ p.class }
						description={ p.description }
						id={ p.id }
						index={ i }
						key={ 'piece-' + i }
						src={ p.file }
						title={ p.title }
					/>
				);
			});
		}
	}
	render = () => {
		return (
			<div className="projects">
				{ this.showProjects() }
			</div>
		);
	}
}
