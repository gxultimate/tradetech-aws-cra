import React, { Component } from 'react';
import { render } from 'react-dom';
import ExcelReader from './ExcelReader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <ExcelReader/>
      </div>
    );
  }
}

export default App;
