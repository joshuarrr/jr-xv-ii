import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Nav } from './nav';
import { Logo } from './logo';
import { DevMode } from './dev-mode';

require('../../styles/components/page-wrapper.css');

export class PageWrapper extends Component {
	static propTypes = {
		children: React.PropTypes.node,
		hasNav: React.PropTypes.bool,
		route: React.PropTypes.object
	}

	render() {
		const hasNav = this.props.hasNav;
		return (
			<div className="page-wrapper">
				<header>
					<Logo />
					<Helmet titleTemplate="Joshuar has a website. %s" />
					{ hasNav && <Nav /> }
				</header>
				<main className="grid">
					{ this.props.children }
				</main>
				<DevMode showDevMode={ false } />
				<footer>
				</footer>
			</div>
		);
	}
}
