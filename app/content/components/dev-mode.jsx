import React, { Component } from 'react';
import { Guides } from './dev-guides';
require('../../styles/components/dev-mode.css');

export class DevMode extends Component {
	static propTypes = {
		showDevMode: React.PropTypes.bool
	}
	render() {
		const showDev = this.props.showDevMode;
		// console.log('showDev = ' + showDev);
		return (
			<div className="dev-mode-wrap">
				{
					showDev &&
					<Guides />
				}
			</div>
		);
	}
}
