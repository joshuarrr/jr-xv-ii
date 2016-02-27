import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { Projects } from './components/projects';
import designData from '../data/design.js';

export class Design extends Component {

	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="info"
			>
				<Helmet title="Design" />
				<h1 className="page-title">
					design
				</h1>
				<Projects
					category="design"
					data={ designData }
				/>
			</PageWrapper>
			);
		}
	}
