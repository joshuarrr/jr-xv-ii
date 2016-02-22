import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
require("../styles/app.css");

export class Design extends Component {

	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="projects"
			>
				<Helmet title="Design" />
				<h1 className="page-title">design</h1>
				<h2>Colorpen</h2>
				<h2>idealist</h2>
				<h2>grand canyon</h2>
				<h2>chali</h2>
				<h2>skydance</h2>
				<h2>produce row</h2>
				<h2>polar express</h2>
			</PageWrapper>
			);
		}
	}
