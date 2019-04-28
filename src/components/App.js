import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './containers/HogContainer.js'
import normalHogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: normalHogs,
    sortedByName: false,
    sortedByWeight: false,
    greaseFiltered: false
  }

  sortByName = () => {
    let nameSortedHogs = this.state.hogs.sort(function(a, b) {
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    })
    this.setState({
      hogs: nameSortedHogs,
      sortedByName: true,
      sortedByWeight: false
    })
  }

  sortByWeight = () => {
    let weightSortedHogs =
    this.state.hogs.sort(function(a, b) {
      return b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
    })
    this.setState({
      hogs: weightSortedHogs,
      sortedByName: false,
      sortedByWeight: true
    })
  }

  greaseFilter = () => {
    if (!this.state.greaseFiltered){
      let greasedHogArray  = this.state.hogs.filter(hog => {
        return hog.greased
      })
      this.setState({
        hogs: greasedHogArray,
        greaseFiltered: true
      })
    }
    else {
      this.setState({
        hogs:normalHogs,
        greaseFiltered:false
      }, this.unFilterGreasedHogs())

    }

  }

  unFilterGreasedHogs = () => {
    if (this.state.sortedByName){
      this.sortByName()
    }
    else if (this.state.sortedByWeight){
      this.sortByWeight()
    }
  }



  render() {
    return (
      <div className="App">
          < Nav state={this.state} sortByName = {this.sortByName} sortByWeight = {this.sortByWeight} greaseFilter = {this.greaseFilter} />
          <HogContainer hogs = {this.state.hogs}/>
      </div>
    )
  }
}

export default App;
