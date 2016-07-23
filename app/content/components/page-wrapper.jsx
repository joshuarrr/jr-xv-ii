import React, { Component } from "react";
import Helmet from "react-helmet";
import { DevMode } from "./dev-mode";
import { Logo } from "./logo";
import { Nav } from "./nav";
import { Hero } from "./hero";
import { SocialLinks } from "./social-links";
import { NavToggle } from "./nav-toggle";
import { VelocityTransitionGroup } from 'velocity-react';
import Headroom from 'react-headroom';
require("../../styles/components/page-wrapper.css");
require("../../styles/components/site-header.css");
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
    store.register(() => this.forceUpdate());
    // console.log('* CDU');
  }

  render = () => {
    // console.log('* Render');
    const hasHero = this.props.hasHero;
    const isLoadedClass = store.isLoaded ? ' initialized ' : ' initializing ';
    const isNavExpanded = store.isNavExpanded ? ' nav-is-expanded' : '';

    return (
      <div className="grid">
        <Helmet titleTemplate="Joshuar has a website. %s" />

        {/* Header */}
        <Headroom
          disableInlineStyles
          upTolerance={ 15 }
          downTolerance={ 10 }
          wrapperStyle={{
            height: 'auto'
          }}
          extraClasses={ isLoadedClass + isNavExpanded}
        >
          <Logo />
          <NavToggle />
          <header className={'site-header ' + this.props.mainClass + isNavExpanded }>
            <Nav />
          </header>
        </Headroom>

        {/* Hero */}
        <VelocityTransitionGroup
          enter={{
            animation: {
              opacity: [0.4, 0]
            },
              duration: 10000,
              delay: 2000
            }
          }
          leave={{
            animation: {
              opacity: [0, 0.4]
            },
              duration: 500
            }
          }
          className="hero"
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
          className={ "main " + this.props.mainClass }
          component={"main"}
          runOnMount
        >
          <div className="content">
            { this.props.children }
          </div>
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
