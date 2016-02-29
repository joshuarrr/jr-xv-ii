import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { Projects } from './components/projects';
import artData from '../data/art.js';

export class Art extends Component {
	render() {
		return (
			<PageWrapper
				hasHero={ false }
				mainClass="info"
			>
				<Helmet title="Art" />
				<h1 className="page-title">
					art
				</h1>
				<Projects
					category="art"
					data={ artData }
				/>
			</PageWrapper>
			);
		}
	}
