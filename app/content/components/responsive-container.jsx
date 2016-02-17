import React, { Component } from "react";
import ReactDOM from "react-dom";

export class ResponsiveContainer extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    class: React.PropTypes.string
  }

  constructor() {
    super();

    this.updateDimensions = this.updateDimensions.bind(this);

    this.state = {
      width: null,
      height: null
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    const node = ReactDOM.findDOMNode(this);

    this.setState({
      width: node.offsetWidth,
      height: node.offsetHeight
    });
  }

  render() {
    let image;
    const propClass = this.props.class ? this.props.class : "";

    if (this.state.width) {
      const child = React.Children.only(this.props.children);

      image = React.cloneElement(child, {
        container: this.state
      });
    }

    return (
      <div
        className={ "responsive-container  " + propClass }
      >
        { image }
      </div>
    );
  }
}

