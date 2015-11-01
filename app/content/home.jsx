import React, { Component } from 'react';
import { Nav } from './components/nav';

export class Home extends Component {
  render() {
    return (
			<main className="home">
    		<Nav />
				<h1>Hello.</h1>
			</main>
    );
  }
}
