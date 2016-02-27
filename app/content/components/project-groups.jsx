import React, { Component } from "react";
import { ProjectGroup } from './project-group';

export class ProjectGroups extends Component {
	static propTypes = {
		category: React.PropTypes.string,
		data: React.PropTypes.array
	}

	render() {
		const data = this.props.data;

		const group = data.map(function exp(p, i) {
			const groupTitle = p.groupTitle;
			const groupDescription = p.groupDescription;

			return (
				<div key={ "group-" + i }>
					<h2>{ groupTitle }</h2>
					<p>{ groupDescription }</p>
					<ProjectGroup
						index={ i }
						key={ 'group-' + i }
						pieces={ p.pieces }
						data={ data }
					/>
				</div>
			);
		});

		return (
			<div className="groups-wrap">
				{ group }
			</div>
		);
	}
}
