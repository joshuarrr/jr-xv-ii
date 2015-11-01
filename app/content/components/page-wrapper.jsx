import React, { Component } from 'react';

export class PageWrapper extends Component {
	static propTypes = {
		children: React.PropTypes.node
	}
	render() {
		return (
			<div className="site-wrapper">
				{ this.props.children }
			</div>
		);
	}
}
