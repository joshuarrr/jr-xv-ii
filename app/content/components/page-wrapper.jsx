import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Nav } from './nav';
require('../../styles/components/page-wrapper.css');

export class PageWrapper extends Component {
	static propTypes = {
		children: React.PropTypes.node
	}
	render() {
		return (
			<div className="page-wrapper">
				<Helmet titleTemplate="Joshuar has a website. %s" />
    		<Nav />
				{ this.props.children }
			</div>
		);
	}
}
