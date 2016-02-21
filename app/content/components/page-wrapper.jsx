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

  componentDidMount() {
    store.isLoaded = true;
  }

  render = () => {
    const hasNav = this.props.hasNav;
    const hasHero = this.props.hasHero;

    return (
      <div className="page-wrapper  grid">
        <Helmet titleTemplate="Joshuar has a website. - %s" />
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
              className="header-animation velocity-wrapper"
              runOnMount
            >
            <header className="site-header init">
              <Logo />
              { hasNav && <Nav /> }
            </header>
          </VelocityTransitionGroup>
          :
            <header className="site-header">
              <Logo />
              { hasNav && <Nav /> }
            </header>
        }
          { hasHero && <Hero /> }

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
            className="velocity-wrapper"
            runOnMount
          >
            <main className={ 'main ' + this.props.mainClass + '-page init' }>
              { this.props.children }
            </main>
          </VelocityTransitionGroup>

          <DevMode showDevMode={ false } />

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
