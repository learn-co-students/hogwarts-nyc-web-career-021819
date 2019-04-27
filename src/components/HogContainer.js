import React, { Component } from 'react'
import hogs from '../porkers_data';
import HogCard from './HogCard'
import FilterBar from './FilterBar'

export default class HogContainer extends Component {

  state = {
    allHogs: hogs
  }

  // greasedHogsOnly = () => {
  //   let greasedHogs = [...this.state.allHogs]
  //
  //     greasedHogs.filter( hog => {
  //       hog.greased
  //     })
  //   return greasedHogs
  //   }



  filterHogs = (filter) => {

    let newHogsArr = [...this.state.allHogs]

    let filteredHogs = newHogsArr.sort(function (a, b) {
      console.log('in the filter', a[filter.sortBy])
        if (a[filter.sortBy] < b[filter.sortBy]) {
            return -1;
        } else if (a[filter.sortBy] > b[filter.sortBy]) {
            return 1;
        } else {
            return 0;
        }
    });
    

    let greasedHogs = filteredHogs.filter( hog => {
        return hog.greased
      })

    if(filter.sortBy !== "" && !filter.filterGreased) {
      this.setState({
         allHogs: filteredHogs
       })
     }

    if(filter.sortBy !== "" && filter.filterGreased) {
      this.setState({
        allHogs: greasedHogs
        })
      }

    if(filter.sortBy === "" && !filter.filterGreased) {
      this.setState({
        allHogs: hogs
        })
      }
    if(filter.sortBy === "" && filter.filterGreased) {
      this.setState({
        allHogs: greasedHogs
        })
      }




    //   this.setState({
    //     allHogs: greasedHogs
    //   })
    // }
    // // else {
    //   this.setState({
    //     allHogs: filteredHogs
    //   })
  }




  render() {
    let renderHogs = this.state.allHogs.map( hog => <HogCard hog={hog} key={hog.name} />)

    return(
      <div>
        < FilterBar filterHogs={this.filterHogs} /> 
        {renderHogs}
      </div>
    )
  }
}
