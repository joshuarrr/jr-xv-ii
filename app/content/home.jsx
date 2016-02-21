import React, { Component, PropTypes } from "react";
import { PageWrapper } from "./components/page-wrapper";
import { Link } from "react-router";
import Helmet from "react-helmet";
import { Nav } from "./components/nav";
require("../styles/app.css");

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showProjects: false,
			hasNav: true
		};
	}

	render = () => {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero
				mainClass="home"
			>
				<Helmet title="Home" />
				<h1 className="page-title">joshuar</h1>
				<Nav />
			</PageWrapper>
		);
	}
}
