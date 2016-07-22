import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
require("../styles/content/photography.css");

export class Photography extends Component {
	render() {
		return (
			<PageWrapper
				hasHero={ false }
				mainClass="photography"
			>
				<Helmet title="Photography" />
				<p className="intro-text no-photos">There are no photos here right now because stupid Instagram changed their stupid api the day after I spent like a month trying to figure out how to write a decent lazy-loading infinite scrolling photo viewer. It was pretty cool, but now I don't have a photo section. I'll make something new pretty soon. I guess.</p>
			</PageWrapper>
		);
	}
}
