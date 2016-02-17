import React, { Component } from "react";
import Helmet from "react-helmet";
import { DevMode } from "./dev-mode";
import { Logo } from "./logo";
import { Nav } from "./nav";
import { Hero } from "./hero";
import { SocialLinks } from "./social-links";
require("../../styles/components/page-wrapper.css");

export class PageWrapper extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    hasNav: React.PropTypes.bool,
    hasHero: React.PropTypes.bool,
    mainClass: React.PropTypes.string,
    route: React.PropTypes.object
  }

  render() {
    const hasNav = this.props.hasNav;
    const hasHero = this.props.hasHero;
    console.log('— page-wrapper.jsx (render)' + '\n * '
      + 'hasHero: ' + hasHero + '\n\n'
    );

    return (
      <div className="page-wrapper  grid">
        <Helmet titleTemplate="Joshuar has a website. - %s" />
        <header className="site-header">
          <Logo />
          { hasNav && <Nav /> }
        </header>
        { hasHero && <Hero /> }
        <main className={ 'main ' + this.props.mainClass + '-page' }>
            { this.props.children }
        </main>
        <DevMode showDevMode={ false } />
        <footer className="site-footer">
          <SocialLinks />
        </footer>
      </div>
    );
  }
}
