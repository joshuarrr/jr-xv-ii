import React, { Component } from "react";
import { PageWrapper } from "./components/page-wrapper";
import Helmet from "react-helmet";
import { VelocityTransitionGroup } from 'velocity-react';
// import { Waypoint } from 'react-waypoint';
require("../styles/app.css");

// jQuery for ajax
const $ = window.jQuery;

// Number of images to fetch per request
const count = '1';

// Setup the initial ajax url
const apiUrl = 'https://api.instagram.com/v1/users/5335790/media/recent/';
const token = '5335790.ab103e5.bcdfe72e51244666a63a238b13eb902c';
const url = apiUrl + '?access_token=' + token + '&count=' + count + '&callback=?';

export class Photography extends Component {

	constructor() {
		super();
		this.state = {
			items: [],
			isLoading: false
		};
	}

	componentDidMount() {
		// this.serverRequest = $.getJSON(url, function exp(result) {
		// 	const initialItems = result.data;

		// 	this.setState({
		// 		items: initialItems
		// 	});
		// }.bind(this));

		// Make a jQuery Ajax call
		$.getJSON(url, function getResults(result) {
			if (!result || !result.data || !result.data.length) {
				console.log('Something went wrong with the ajax request.');
			} else {
				const initialItems = result.data;
				// console.log('* initialItems = ' + initialItems + '\n');
				const nextSet = result.pagination.next_url;
				// console.log('* nextSet = ' + nextSet + '\n');
				this.setState({
          items: initialItems,
          nextSet: nextSet,
          isLoading: false
				});
			}
		}.bind(this));
	}

  componentWillUnmount() {
    // this.serverRequest.abort();
  }

	/* Render Items */
	renderItems = () => {
		console.log('renderItems this.state.items = ' + this.state.items);
    return this.state.items.map(function results(p, index) {
      if (p.type === 'video') {
        return (
          <VelocityTransitionGroup
            key={ index }
            className="ig-picture-li"
            component="li"
            enter="transition.fadeIn"
            enterOptions={ {delay: 100} }
            leave="transition.fadeOut"
            defaults={ {duration: 2000} }
          >
            <video
              width="100%"
              height="100%"
              autoPlay="autoplay"
              loop
              muted
              controls
                poster={ p.images.standard_resolution.url }
              className="ig-video">
              <source
                src={ p.videos.standard_resolution.url }
                type="video/mp4"
              />
            </video>
          </VelocityTransitionGroup>
        );
      }
      if (p.type === "image") {
        return (
          <VelocityTransitionGroup
            key={ index }
            className="ig-picture-li"
            component="li"
            enter="transition.fadeIn"
            enterOptions={ {delay: 100} }
            leave="transition.fadeOut"
            defaults={ {duration: 1000} }
          >
            <img
              src={ p.images.standard_resolution.url }
              alt="image"
              link={ p.link }
              title={ p.caption ? p.caption.text : "" }
              className="ig-picture"
            />
          </VelocityTransitionGroup>
        );
      }
    });
	}

	render = () => {
		return (
			<PageWrapper
				hasNav={ false }
				hasHero={ false }
				mainClass="info"
			>
				<Helmet title="Photography" />
				<h1 className="page-title">photography</h1>
				{ this.renderItems() }
			</PageWrapper>
			);
		}
	}
