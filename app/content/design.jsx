import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { Projects } from './components/projects';
import designData from '../data/design.js';

export class Design extends Component {
	render() {
		return (
			<PageWrapper
				hasHero={ false }
				mainClass="info"
			>
				<Helmet title="Design" />
				<h1 className="page-title">
					design
				</h1>
				<p className="intro-text">Like most designers, I'm fascinated by the juncture of form and function, the balance of usability and surprise, and the nuances of ideation and implementation. In other words, I make it look nice. Here are a few of my favorite projects.</p>
				<Projects
					category="design"
					data={ designData }
				/>
			</PageWrapper>
			);
		}
	}
