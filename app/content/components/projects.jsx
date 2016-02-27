import React, { Component } from "react";
import { Project } from './project';

export class Projects extends Component {
	static propTypes = {
		category: React.PropTypes.string,
		data: React.PropTypes.array
	}

	render() {
		// Define the data prop
		const data = this.props.data;

		// Define Groups
		const groups = data.map(function exp(p, i) {
			// If there is a group title or description
			if (p.groupTitle || p.groupDescription) {
				// Define pieces
				const pieces = p.pieces.map(function expression(piece, index) {
					return (
						<Project
							class={ piece.class }
							description={ piece.description }
							id={ piece.id }
							index={ index }
							key={ 'piece-' + index }
							src={ piece.file }
						/>
					);
				});
				// Show the group title, description & pieces...
				return (
					<div className="group" key={ 'key' + i }>
						<h2 className="group-title">{ p.groupTitle }</h2>
						{/* only show the description if there is one */}
						{ p.groupDescription &&
							<p className="group-description">
								{ p.groupDescription }
							</p>
						}
						{/* Show the pieces */}
						{ pieces }
					</div>
				);
			}
			// ...otherwise return the projects
			return (
				<Project
					class={ p.class }
					description={ p.description }
					id={ p.id }
					index={ i }
					key={ 'piece-' + i }
					src={ p.file }
					title={ p.title }
					role={ p.role }
					tech={ p.tech }
				/>
			);
		});
		// Return Groups
		return (
			<div className="projects">
				{ groups }
			</div>
		);
	}
}
