import React, { Component } from 'react';

import Persons from './containers/Persons';
import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <ol>
          <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
        </ol>
        <Persons />
      </div>
    );
  }
}

export default App;
