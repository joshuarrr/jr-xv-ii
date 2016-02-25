import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
import { Nav } from "./components/nav";
require("../styles/content/home.css");

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
