import React, { Component } from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute } from 'react-router';
import { Home } from './content/home';
import { About } from './content/about';
require('./styles/app.css');

export class App extends Component {
	static propTypes = {
		children: React.PropTypes.node
	}
	render() {
		return (
			<div className="react-wrapper">
				{ this.props.children }
			</div>
			);
	}
}

render((
	// createBrowserHistory removes ULR cruft but eliminates persistent state
	// See: http://rackt.org/history/stable/HashHistoryCaveats.html
	<Router history={ createBrowserHistory({ queryKey: false }) }>
		<Route path="/" component={ App }>
			<IndexRoute component={ Home } />
			<Route path="/about" component={ About } />
			<Route path="/home" component={ Home } />
		</Route>
	</Router>
	), document.getElementById('root'));
