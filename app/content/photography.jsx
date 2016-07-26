import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { ResponsiveContainer } from "./components/responsive-container";
import { ResponsiveImage } from "./components/responsive-image";
require("../styles/content/photography.css");

export class Photography extends Component {
	render() {
		return (
			<PageWrapper
				hasHero={ false }
				mainClass="photography"
			>
				<Helmet title="Photography" />
					{/* Full Frame Photos */}
					<div className="full-frame-images">
						<ResponsiveContainer class="ff-image">
							<ResponsiveImage class="full-frame-image" src="aro.jpg" />
						</ResponsiveContainer>
						<ResponsiveContainer class="ff-image">
							<ResponsiveImage class="full-frame-image" src="mask.jpg" />
						</ResponsiveContainer>
						<ResponsiveContainer class="ff-image">
							<ResponsiveImage class="full-frame-image" src="conquer.jpg" />
						</ResponsiveContainer>
						<ResponsiveContainer class="ff-image">
							<ResponsiveImage class="full-frame-image" src="deepestBlue.jpg" />
						</ResponsiveContainer>
						<ResponsiveContainer class="ff-image">
							<ResponsiveImage class="full-frame-image" src="santa-monica.jpg" />
						</ResponsiveContainer>
						<ResponsiveContainer class="ff-image">
							<ResponsiveImage class="full-frame-image" src="beach.jpg" />
						</ResponsiveContainer>
						<ResponsiveContainer class="ff-image">
							<ResponsiveImage class="full-frame-image" src="paint.jpg" />
						</ResponsiveContainer>
					</div>
				{/* Half Screen Photos */}

			</PageWrapper>
		);
	}
}
