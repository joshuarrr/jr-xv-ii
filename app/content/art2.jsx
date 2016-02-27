import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
import { ProjectGroups } from './components/project-groups';
import designData from '../data/design.js';

export class Art2 extends Component {

	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="info"
			>
				<Helmet title="Art" />
				<h1 className="page-title">
					art2: design
				</h1>
				<ProjectGroups
					category="design"
					data={ designData }
				/>
			</PageWrapper>
			);
		}
	}
