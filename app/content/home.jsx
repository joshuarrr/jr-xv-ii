import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
import { Covers } from "./components/covers";
require("../styles/content/home.css");

export class Home extends Component {
	render() {
		return (
			<PageWrapper
				mainClass="home"
			>
				<Helmet title="Ugh." />
				<h1 className="page-title">joshuar</h1>
				<div className="intro-text">
					<p>AKA Josh, or Joshua Richey. A designer, front-end developer, artist, and visual&nbsp;craftsman.</p>
					</div>
				<Covers />
				<div className="email">
					<svg viewBox="0 0 48 34">
						<path d="M45.153,0.988 L2.847,0.988 C1.42,0.988 0.259,2.149 0.259,3.575 L0.259,30.424 C0.259,31.851 1.42,33.012 2.847,33.012 L45.154,33.012 C46.581,33.012 47.742,31.851 47.742,30.424 L47.742,3.575 C47.741,2.149 46.58,0.988 45.153,0.988 L45.153,0.988 Z M24.175,23.179 C23.687,23.666 23.373,23.667 22.901,23.195 L3.585,2.988 L44.331,2.988 L24.175,23.179 L24.175,23.179 Z M15.722,18.578 L2.259,30.14 L2.259,4.495 L15.722,18.578 L15.722,18.578 Z M17.105,20.026 L21.471,24.593 C22.107,25.227 22.818,25.543 23.53,25.543 C24.242,25.543 24.955,25.226 25.59,24.591 L30.732,19.442 C30.786,19.536 30.845,19.629 30.931,19.704 L43.793,31.012 L4.313,31.012 L17.105,20.026 L17.105,20.026 Z M45.479,29.832 L32.25,18.202 C32.196,18.154 32.131,18.133 32.071,18.099 L45.74,4.407 L45.74,30.228 C45.686,30.082 45.605,29.943 45.479,29.832 L45.479,29.832 Z" id="Shape"></path>
					</svg>
					<a className="mail" href="mailto:jr@joshuar.com" rel="external">Get in touch</a>
				</div>
				</PageWrapper>
		);
	}
}
