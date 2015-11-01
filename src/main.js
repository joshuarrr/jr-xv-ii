import React, { Component } from 'react';
import { render } from 'react-dom';
import { Logo } from './content/logo.jsx';

export class App extends Component {
  render() {
    return (
      <div>
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));