import React, { Component } from 'react';
import { PageWrapper } from './components/page-wrapper';
import Helmet from 'react-helmet';
require('../styles/app.css');

export class Home extends Component {
	render() {
		return (
			<PageWrapper>
				<Helmet title="Home" />
				<h1>Hello.</h1>
				<p><a href="https://github.com/joshuarrr/jr-base">React Base</a> is a minimal <a href="https://facebook.github.io/react/">React.js</a> starter site built on <a href="https://github.com/gaearon/react-transform-boilerplate">React Tranform Boilerplate</a>, adding <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CB4QFjAAahUKEwi-7MbLzP3IAhUB9mMKHf7pDaA&url=http%3A%2F%2Feslint.org%2F&usg=AFQjCNETkIcsqHgsrPDzatCqKZiSd_HKIw">ESLint</a>, a basic <a href="https://github.com/rackt/react-router">React Router</a> implementation, and lots of <a href="https://github.com/postcss/postcss">PostCSS</a> plugins.</p>
			</PageWrapper>
		);
	}
}
