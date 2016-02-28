import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
import { Infinigram } from "./components/infinigram";
require("../styles/content/photography.css");

export class Photography extends Component {
	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="photography"
			>
				<Helmet title="Photography" />
				<Infinigram />
			</PageWrapper>
		);
	}
}
