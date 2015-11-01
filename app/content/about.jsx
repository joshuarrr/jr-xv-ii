import React, { Component } from 'react';
import { Nav } from './components/nav';

export class About extends Component {
  render() {
    return (
			<main className="about">
    		<Nav />
				<h1>About</h1>
			</main>
    );
  }
}
