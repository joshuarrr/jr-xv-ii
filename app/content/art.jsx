import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
import { ProjectGroups } from './components/project-groups';
import artData from '../data/art.js';

export class Art extends Component {

	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="info"
			>
				<Helmet title="Art" />
				<h1 className="page-title">
					art
				</h1>
				<ProjectGroups
					category="art"
					data={ artData }
				/>
			</PageWrapper>
			);
		}
	}
