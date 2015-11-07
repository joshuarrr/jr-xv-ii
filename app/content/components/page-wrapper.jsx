import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Nav } from './nav';
require('../../styles/components/page-wrapper.css');

export class PageWrapper extends Component {
	static propTypes = {
		children: React.PropTypes.node,
		color: React.PropTypes.string
	}
	render() {
		return (
			<div className="page-wrapper">
				<Helmet titleTemplate="%s | React Base" />
    		<Nav style={ { color: this.props.color } }/>
				{ this.props.children }
			</div>
		);
	}
}
