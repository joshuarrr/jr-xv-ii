import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { Projects } from './components/projects';
import dataFormatData from '../data/dataFormat.js';

export class Data extends Component {
	render() {
		return (
			<PageWrapper
				hasHero={ false }
				mainClass="info"
			>
				<Helmet title="Data Test" />
				<h1 className="page-title">
					data test
				</h1>
				<Projects
					category="design"
					data={ dataFormatData }
				/>
			</PageWrapper>
			);
		}
	}
