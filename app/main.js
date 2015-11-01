import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router'
import { Home } from './content/home';
import { About } from './content/about';
require("./styles/app.css");

export class App extends Component {
  render() {
    return (
			<div>
				<nav>
				  <ul>
				    <li><Link to="/home">Home</Link></li>
				    <li><Link to="/about">About</Link></li>
				  </ul>
				</nav>
				{this.props.children}
			</div>
    );
  }
}

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="home" component={Home} />
    </Route>
  </Router>
), document.getElementById('root'))