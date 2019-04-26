import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {
  state ={ 
    hogs,
    filterValue: ""
  }

  hogFilter = () => {
   return this.state.hogs.filter(hog => hog.name.toLowerCase().includes(this.state.filterValue))
  }

  handleChange = (e) => {
    this.setState({
      filterValue: e.target.value
    })
  }

  handleGreaseFilter = (e) => {
    if (e.target.value === "greased"){
      this.setState({
        hogs: this.state.hogs.filter(hog => hog.greased === true)
        })
      }
    else if (e.target.value === "weight"){
      console.log(this.state.hogs[0][weight])
      this.setState({
        hogs: this.state.hogs.sort(function(a,b) {return b[weight] - a[weight]})
      })
    }
  }


  render() {
    console.log(this.state.hogs[1])
    return (
      <div className="App">
          < Nav handleGreaseFilter={this.handleGreaseFilter} hogsFilter={this.state.filterValue} handleChange={this.handleChange}/>
          < Hog hogs={this.hogFilter()}/>
      </div>
    )
  }
}

export default App;
