import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
const Codepen = require('react-codepen');
import Helmet from "react-helmet";
require("../styles/content/code.css");

export class Code extends Component {

	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="projects"
			>
				<Helmet title="Code" />
				<h1 className="page-title">code</h1>

				<h2>Hello</h2>
				<Codepen
					user="joshuar"
					hash="GpWJMV"
					height="300"
				/>

				<h2>Flexgrid</h2>
				<Codepen
					user="joshuar"
					hash="pjLWPw"
					height="300"
				/>

				<h2>Colorpen</h2>
				<Codepen
					user="joshuar"
					hash="RWVKgP"
					height="300"
				/>
			</PageWrapper>
			);
		}
	}
