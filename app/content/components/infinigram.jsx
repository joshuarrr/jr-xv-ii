import React, { Component } from "react";
import { VelocityTransitionGroup } from 'velocity-react';
import Waypoint from 'react-waypoint';
import store from '../../store';
require("../../styles/content/photography.css");

// jQuery for ajax
const $ = window.jQuery;

// Number of images to fetch per request
const count = '1';

// Setup the initial ajax url
const apiUrl = 'https://api.instagram.com/v1/users/5335790/media/recent/';
const token = '5335790.ab103e5.bcdfe72e51244666a63a238b13eb902c';
const url = apiUrl + '?access_token=' + token + '&count=' + count + '&callback=?';

export class Infinigram extends Component {
	constructor() {
		super();

		this.state = {
			items: [],
			isLoading: false
		};
	}

	/* Did Mount */
	componentDidMount() {
		store.isInfinigramming = true;

		// Make a jQuery Ajax call
		$.getJSON(url, function getResults(result) {
			if (!result || !result.data || !result.data.length) {
				console.log('Something went wrong with the ajax request.');
			}
			const initialItems = result.data;
				console.log('* initialItems = ' + initialItems + '\n');
			const nextSet = result.pagination.next_url;
				console.log('* nextSet = ' + nextSet + '\n');

			this.setState({
				items: initialItems,
				nextSet: nextSet,
				isLoading: false
			});
		}.bind(this));
	}

	/* Load More */
	loadMoreItems = () => {
		const newUrl = this.state.nextSet + '&callback=?';
		this.setState({ isLoading: true });

			$.getJSON(newUrl, function getMore(result) {
				if (!result || !result.data || !result.data.length) {
					console.log('Something went wrong with the ajax request.');
					return;
				}
				let currentItems = this.state.items;
				currentItems = currentItems.concat(result.data);

				this.setState({
					items: currentItems,
					nextSet: result.pagination.next_url,
					isLoading: false
				});
			}.bind(this));
	}

	/* Render Items */
	renderItems = () => {
		const self = this;
		console.log('renderItems this.state.items = ' + this.state.items);
		return this.state.items.map(function results(p, index) {
			if (p.type === 'video') {
				return (
					<VelocityTransitionGroup
						key={ index }
						enter={{
							animation: {
								opacity: [1, 0]
							},
							duration: 400,
							delay: 600
						}}
						className="infinigram-item"
						runOnMount
					>
						{ p.caption &&
							<div className="img-title-text">
							{ p.caption ? p.caption.text : "" }
							</div>
						}
						<video
							width="100%"
							height="100%"
							autoPlay="autoplay"
							loop
							muted
							controls
							poster={ p.images.standard_resolution.url }
							className="infinigram-video">
							<source
							src={ p.videos.standard_resolution.url }
							type="video/mp4"
						/>
						</video>
					</VelocityTransitionGroup>
				);
			} else if (p.type === "image") {
				return (
					<VelocityTransitionGroup
						key={ index }
						enter={{
							animation: {
								opacity: [1, 0]
							},
							duration: 400,
							delay: 600
						}
					}
					className="infinigram-item"
					runOnMount
				>
					{ p.caption &&
						<div className="img-title-text">
						{ p.caption ? p.caption.text : "" }
						</div>
					}
					<img
						src={ p.images.standard_resolution.url }
						alt="image"
						link={ p.link }
						className="infinigram-picture"
					/>
				</VelocityTransitionGroup>
				);
			}
		});
	}

	/* Loading Message */
	renderLoadingMessage() {
		if (this.state.isLoading) {
			return (
				<p className="infinigram-loading-message">
					Loading...
				</p>
			);
		}
	}

	/* Render Waypoints */
	renderWaypoint() {
		if (!this.state.isLoading) {
			return (
				<div className="ig-waypoint">
					<Waypoint
						onEnter={this.loadMoreItems}
						threshold={ 1 }
					/>
				</div>
			);
		}
	}

	/* Render */
	render() {
		console.log('* Render - infinigram');
		return (
			<div className="infinigram">
				<div className="infinigram-list">
					{ this.renderItems() }
					{ this.renderWaypoint() }
				</div>
			</div>
		);
	}
}
