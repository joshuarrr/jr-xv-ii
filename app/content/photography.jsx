import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { Infinigram } from "./components/infinigram";
require("../styles/content/photography.css");

export class Photography extends Component {
	render() {
		return (
			<PageWrapper
				hasHero={ false }
				mainClass="photography"
			>
				<Helmet title="Photography" />
				<Infinigram />
			</PageWrapper>
		);
	}
}
