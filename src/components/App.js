import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogIndex from './HogIndex'
import HogFilter from './HogFilter'



class App extends Component {
  
  state={
    hogs
  }
  
  
  onNameChange = () => {
    this.setState({
      hogs: [...this.state.hogs].sort((hog1, hog2) => {
        return hog1.name.localeCompare(hog2.name)
      })
    })
  } 
  
  onWeightChange = () => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    this.setState({
      hogs: [...this.state.hogs].sort((hog1, hog2) => {
        return hog1[weight] - hog2[weight]
      })
    })
  } 
    

  render() {
    return (
      <div className="App">
          < Nav />
        < HogFilter hogName={this.onNameChange} hogWeight={this.onWeightChange}/> 
          < HogIndex hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
