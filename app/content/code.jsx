import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
require("../styles/app.css");

export class Code extends Component {

	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="projects"
			>
				<Helmet title="Code" />
				<h1 className="site-title">design</h1>
				<h2>Hello</h2>
				<h2>Flexgrid</h2>
				<h2>Colorpen</h2>
				<h2>joshuar</h2>
			</PageWrapper>
			);
		}
	}
