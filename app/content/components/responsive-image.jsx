import React, { Component } from "react";
import ImageLoader from "react-imageloader";
import { LoadingBar } from "./loading-bar";

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
    const loadMsg = this.props.loadMsg;


    function preloader() {
      if (this.loadMsg) {
        return (
          <p>loading</p>
        );
      }
    }

    return (
        // render the image with ImageLoader
        <ImageLoader
          src={ src }
          className={ this.props.class }
          preloader={ preloader }
        >
          Image load failed!
        </ImageLoader>
    );
  }
}

ResponsiveImage.defaultProps = {
  sizeInterval: 50
};
