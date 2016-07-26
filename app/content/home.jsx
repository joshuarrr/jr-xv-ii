import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { Covers } from "./components/covers";
require("../styles/content/home.css");

export class Home extends Component {

	render() {
		return (
			<PageWrapper
				mainClass="home"
			>
				<Helmet title="Ugh." />
				<h1 className="page-title">joshuar</h1>
				<div className="intro-text">
{/*					<p>Hi! Welcome to my internet place where I show you things.</p>
					<p>Like most designers, I'm fascinated by the juncture of form and function, the balance of usability and surprise, and the nuances of ideation and implementation. In other words, I make it look nice.</p>
*/}
					<p>AKA Josh, or Joshua Richey. A designer, front-end developer, artist, and visual&nbsp;craftsman. Beyond design, I like to draw, take photographs, and walk my greyhound.</p>
					</div>
        <Covers />
			</PageWrapper>
		);
	}
}
