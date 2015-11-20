import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
// import { SocialLinks } from "./components/social-links";
// require("../styles/art.css");
// no page specific stylesheets

export class Art extends Component {

  render() {
    return (
      <PageWrapper hasNav={ false }>
        <Helmet title="Art" />
				<h1>Art</h1>
      </PageWrapper>
    );
  }
}
