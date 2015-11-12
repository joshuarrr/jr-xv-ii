import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
import { SocialLinks } from "./components/social-links";
require("../styles/app.css");

export class Home extends Component {

  render() {
    return (
      <PageWrapper hasNav={ false }>
        <Helmet title="Home" />
        <SocialLinks />
      </PageWrapper>
    );
  }
}
