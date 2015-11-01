import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Nav } from './nav';

export class PageWrapper extends Component {
	static propTypes = {
		children: React.PropTypes.node
	}
	render() {
		return (
			<div className="site-wrapper">
				<Helmet titleTemplate="%s | React Base" />
    		<Nav />
				{ this.props.children }
			</div>
		);
	}
}
