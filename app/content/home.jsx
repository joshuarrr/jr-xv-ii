import React, { Component } from 'react';
import { PageWrapper } from './components/page-wrapper';
import Helmet from 'react-helmet';

export class Home extends Component {
	render() {
		return (
			<PageWrapper>
				<Helmet title="Home" />
				<h1>Hello.</h1>
			</PageWrapper>
		);
	}
}
