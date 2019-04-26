import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer';
import hogs from '../porkers_data';
import Filter from './Filter';

class App extends Component {

  componentDidMount() {
    // console.log(hogs)
  }
  render() {
    return (
      <div className="App">
        < Nav />
        <HogContainer hogs={hogs} />
      </div>
    )
  }
}

export default App;
