import React, { Component } from 'react';
import { render } from 'react-dom';
import { Home } from './content/home';
require("./styles/app.css");

export class App extends Component {
  render() {
    return (
      <div>
        <Homea />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));