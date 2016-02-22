import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
require("../styles/app.css");

export class Photography extends Component {

	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="projects"
			>
				<Helmet title="Photography" />
				<h1 className="page-title">photography</h1>
			</PageWrapper>
			);
		}
	}
