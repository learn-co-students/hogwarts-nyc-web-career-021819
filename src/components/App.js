import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogs from './Hogs'
import Sort from './Sort'
// import * from '../hog-imgs'

class App extends Component {
  state = {
    sortValue: '',
    hogs: hogs,
    checked: false
  }

  removeHog=(hog)=>{
    this.setState({
      hogs: this.state.hogs.filter(h => {
        return h.name !== hog.name
      })
    })
  }

  // greasedHog=(checked)=>{
  //   return this.state.hogs.filter(h => {
  //       return h.greased === checked
  //     })
  // }

  handleGreased=()=>{
    this.setState(prevState => {
      return {
        checked: !prevState.checked
      }
    })
  }


  greasedHog=()=>{
    console.log('greased',this.state.checked);
    console.log('greased',this.sortHogs());
    return this.sortHogs().filter(h => {
        return h.greased === this.state.checked
      })
  }

  sortHogs=()=>{
    if(this.state.sortValue ==='name'){
      return this.state.hogs.sort(function(a,b) {
        let textA = a.name.toLowerCase();
        let textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      })
    } else if (this.state.sortValue==='weight') {
      return this.state.hogs.sort(function(a,b) {
        let textA = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
        let textB = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      })
    } else {
      return this.state.hogs
    }
  }

  changeSortValue = (newSortValue) => {
    this.setState({
      sortValue: newSortValue
    })
  }



  render() {
    console.log(this.state.hogs);
    console.log(this.greasedHog());
    return (
      <div className="App">
          <Nav />
          <Sort changeSortValue={this.changeSortValue}
          greased={this.greasedHog} checked={this.handleGreased}/>
          <Hogs hogs={this.greasedHog()}
       removeHog={this.removeHog}/>
      </div>
    )
  }
}

export default App;
