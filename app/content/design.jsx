import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
import projectList from '../data/design.js';
import { ResponsiveContainer } from "./components/responsive-container";
import { ResponsiveImage } from "./components/responsive-image";
require("../styles/content/design.css");

export class Design extends Component {

	render = () => {
		// const projectArray = projectList.slice(0, 1);
		// console.log('* projectArray = ' + projectArray + '\n');

		const projects = projectList.map(function exp(p, i) {
			return (
				<div
					className="project"
					key={ p.id }
				>
					<h2 className="project-title">{ p.title }</h2>
					<ResponsiveContainer>
						<ResponsiveImage
							class={ p.class }
							key={ p.id }
							src={ p.file }
						/>
					</ResponsiveContainer>
					<dl>
						<dt></dt>
						<dd>{ p.role }</dd>
					</dl>

				{ p.tech &&
					<dl>
						<dt>Tech: </dt>
						<dd>{ p.tech }</dd>
					</dl>
				}
				</div>
			);
		});

		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="projects"
			>
				<Helmet title="Design" />
				<h1 className="page-title">design</h1>
				{ projects }
			</PageWrapper>
			);
		}
	}
