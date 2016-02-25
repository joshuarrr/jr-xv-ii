import React, { Component } from "react";
import Helmet from "react-helmet";
import { DevMode } from "./dev-mode";
import { Logo } from "./logo";
import { Nav } from "./nav";
import { Hero } from "./hero";
import { SocialLinks } from "./social-links";
import { VelocityTransitionGroup } from 'velocity-react';
require("../../styles/components/page-wrapper.css");
import store from '../../store';

export class PageWrapper extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    hasNav: React.PropTypes.bool,
    hasHero: React.PropTypes.bool,
    mainClass: React.PropTypes.string,
    route: React.PropTypes.object
  }

  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    store.isLoaded = true;

    this.setState({
      loading: false
    });
  }

  render = () => {
    const hasNav = this.props.hasNav;
    const hasHero = this.props.hasHero;

    return (
      <div className="grid">
        <Helmet titleTemplate="Joshuar has a website. - %s" />

        {/* Header */}
        { !store.isLoaded ?
          <VelocityTransitionGroup
            enter={{
              animation: {
                opacity: [1, 0]
              },
                duration: 500,
                delay: 500
              }
            }
            className="row header"
            runOnMount
          >
            <header className="site-header init">
              { hasNav && <Nav /> }
            </header>
          </VelocityTransitionGroup>
          :
          <div className="row header">
            <Logo />
            <header className="site-header">
              { hasNav && <Nav /> }
            </header>
          </div>
        }

        {/* Hero */}
        <VelocityTransitionGroup
          enter={{
            animation: {
              opacity: [0.5, 0]
            },
              duration: 10000
            }
          }
          leave={{
            animation: {
              opacity: [0, 0.5]
            },
              duration: 3000
            }
          }
          className="row hero"
          runOnMount
        >
          { hasHero && <Hero /> }
        </VelocityTransitionGroup>

        {/* Main */}
        <VelocityTransitionGroup
          enter={{
            animation: {
              opacity: [1, 0]
            },
              duration: 1000
            }
          }
          leave={{
            animation: {
              opacity: [0, 1]
            },
              duration: 500
            }
          }
          className={ "row main " + this.props.mainClass }
          runOnMount
        >
          <main className="content">
            { this.props.children }
          </main>
        </VelocityTransitionGroup>

        {
          store.isDevMode &&
          <DevMode showDevMode={ false } />
        }

        {/* Footer */}
        { !store.isLoaded ?
          <VelocityTransitionGroup
            enter={{
              animation: {
                opacity: [1, 0]
              },
                duration: 500,
                delay: 500
              }
            }
            className="row footer"
            runOnMount
          >
            <footer className="site-footer init">
              <SocialLinks />
            </footer>
          </VelocityTransitionGroup>
          :
          <footer className="site-footer">
            <SocialLinks />
          </footer>
        }
      </div>
    );
  }
}
