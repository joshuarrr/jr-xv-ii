import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { Covers } from "./components/covers";
require("../styles/content/home.css");

export class Home extends Component {

	render() {
		return (
			<PageWrapper
				hasHero
				mainClass="home"
			>
				<Helmet title="Ugh." />
				<h1 className="page-title">joshuar</h1>
        <Covers />
			</PageWrapper>
		);
	}
}
