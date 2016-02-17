import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
import { Nav } from "./components/nav";
require("../styles/app.css");

export class Art extends Component {

	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="info"
			>
				<Helmet title="Art" />
				<h1 className="site-title">art</h1>
			</PageWrapper>
			);
		}
	}
