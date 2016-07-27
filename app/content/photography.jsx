import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { ResponsiveContainer } from "./components/responsive-container";
import { ResponsiveImage } from "./components/responsive-image";
import photos from '../data/photos.js';
require("../styles/content/photography.css");

export class Photography extends Component {

	render() {
		const filetype = 'jpg';
		const fullFrameImages = photos.map(function exp(photo, index) {
			return (
				<ResponsiveContainer class="ff-image">
					<ResponsiveImage
						class="full-frame-image"
						src={	photo.file + '.' + filetype}
					/>
				</ResponsiveContainer>
			);
		});

		return (
			<PageWrapper
				hasHero={ false }
				mainClass="photography"
			>
				<Helmet title="Photography" />
				{fullFrameImages}
					{/* Full Frame Photos */}
					<div className="full-frame-images">
						{ fullFrameImages }
					</div>
				{/* Half Screen Photos */}

			</PageWrapper>
		);
	}
}
