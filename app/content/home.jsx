import React, { Component, PropTypes } from "react";
import { PageWrapper } from "./components/page-wrapper";
import { Link } from "react-router";
import Helmet from "react-helmet";
import { Nav } from "./components/nav";
require("../styles/app.css");

export class Home extends Component {
	render() {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero
				mainClass="home"
			>
				<Helmet title="Home" />
				<h1 className="site-title">joshuar</h1>
				<p className="intro-text">
					AKA Josh, or Joshua Richey.
					An interactive web designer focused on UX, UI, & IA.
				</p>
					<span className="nav-links">
           <Link
           to="/projects"
           className="nav-link"
           activeClassName="active"
           >
            projects
         </Link>
         </span>
			</PageWrapper>
		);
	}
}
