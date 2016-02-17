import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
import { Nav } from "./components/nav";
require("../styles/app.css");

export class Home extends Component {
	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero
				mainClass="home"
			>
				<Helmet title="Home" />
					<h1 className="site-title">joshuar</h1>
					<p className="intro-text">
						AKA Josh, or Joshua Richey.
						An interactive web designer focused on UX, UI, & IA.
					</p>
					<Nav />
				</PageWrapper>
			);
		}
	}
