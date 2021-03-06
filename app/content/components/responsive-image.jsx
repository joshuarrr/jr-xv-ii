import React, { Component } from "react";
import ImageLoader from 'react-imageloader';

const connection = navigator.connection;
const slow = connection && /(^([23]g?)$)/.test(connection.type);
const devicePixelRatio = (!slow && window.devicePixelRatio) || 1;

export class ResponsiveImage extends Component {
	static propTypes = {
		sizeInterval: React.PropTypes.number,
		container: React.PropTypes.object,
		class: React.PropTypes.string,
		src: React.PropTypes.string,
		loadMsg: React.PropTypes.bool
	}

	getSizeInterval(size) {
		return Math.ceil(size / this.props.sizeInterval) * this.props.sizeInterval;
	}

	render = () => {
		const baseURL = "http://res.cloudinary.com/joshuar/image/upload";
		const container = this.props.container;
		const width = Math.round(this.getSizeInterval(container.width) * devicePixelRatio);
		const dpr = '1.0';
		const src = `${ baseURL }/w_${ width },dpr_${ dpr }/${ this.props.src }`;

		function preloader() {
			return (
				<svg height="50" width="50" ng-show="showpreloader" className="circular">
					<circle cx="25" cy="25" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" className="path"></circle>
				</svg>
			);
		}

		return (
			// <img src={ src } className={ this.props.class} />

			// render with ImageLoader instead
			<ImageLoader
				src={src}
				className={this.props.class}
				preloader={preloader}
			>
				Image load failed!
			</ImageLoader>
		);
	}
}

ResponsiveImage.defaultProps = {
	sizeInterval: 50
};
