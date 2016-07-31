import React, { Component } from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { ResponsiveContainer } from "./components/responsive-container";
import { ResponsiveImage } from "./components/responsive-image";
import photos from '../data/photos.js';
require("../styles/content/photography.css");

export class Photography extends Component {
	constructor() {
		super();
		this.state = {
			scrolled: 'false'
		};
	}

	// componentDidMount() {
		// var image = document.querySelector('.banner');
		// change the image height on scroll
		// window.addEventListener("scroll", function(event) {
		//   var banner = document.querySelector('.banner');
		//   var top = this.scrollY;
		//   console.log('top = ' + top);
		//   var verticalScroll = document.querySelector(".page");
		//   // console.log('Scroll Y: ' + top + "px");
		//   var imgHeight = banner.clientHeight;
		//   console.log('imgHeight = ' + imgHeight);
		//   var i = top * .1;
		//   console.log('i = ' + i);
		//   var computedHeight = imgHeight - (top * .8);
		//   console.log('computedHeight = ' + computedHeight);
		//   banner.style.height = computedHeight + 'px';
		// }, false);
	// }

	handleScroller() {
		// debugger;
		// console.dir( this.refs );
	}

	render = () => {
		const filetype = 'jpg';
		console.log('* this.state.scrolled = ' + this.state.scrolled + '\n');

		const fullFrameImages = photos.map(function exp(photo, index) {
			return (
				<ResponsiveContainer
					class="ff-image"
					key={ 'ff-image' + index }
					ref={ photo.file }
					onScroll={ this.handleScroller() }
				>
					<ResponsiveImage
						class="full-frame-image"
						src={	photo.file + '.' + filetype}
					/>
				</ResponsiveContainer>
			);
		}, this);

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
