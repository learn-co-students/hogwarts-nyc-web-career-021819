import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogIndex from './HogIndex'
import Filter from './Filter'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'


class App extends Component {

  state = {
    hogs: hogs,
  }

  sort = (e) => {
    e.target.value === 'name' ? this.sortByName() : this.sortByWeight()
  }

  sortByName = () => {
    this.setState(prevState => ({
      hogs: prevState.hogs.sort((hog1, hog2) => {
        return hog1.name > hog2.name ? 1 : -1
      })
    }))
  }

  sortByWeight = () => {
    this.setState(prevState => ({
      hogs: prevState.hogs.sort((hog1, hog2) => hog1[weight] - hog2[weight])
    }))
  }

  filter = (e) => {
    e.target.checked ?
    this.setState({
      hogs: this.state.hogs.filter(hog => hog.greased)
    })
    :
    this.setState({
      hogs: hogs
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
    			< Filter sort={this.sort} filter={this.filter}/>
          <br/><br/>
          < HogIndex hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
