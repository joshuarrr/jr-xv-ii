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
				mainClass="code"
			>
				<Helmet title="Codez" />
				<h1 className="page-title">codez</h1>

				<h2>Hello</h2>
				<Codepen
					user="joshuar"
					hash="GpWJMV"
					height="400"
				/>

				<h2>Section Breaks</h2>
				<Codepen
					user="joshuar"
					hash="MwdYLP"
					height="400"
				/>

				<h2>Color Animation</h2>
				<Codepen
					user="joshuar"
					hash="RWVKgP"
					height="300"
				/>

				<h2>Flexgrid</h2>
				<Codepen
					user="joshuar"
					hash="bEPVEL"
					height="400"
				/>

			</PageWrapper>
			);
		}
	}
