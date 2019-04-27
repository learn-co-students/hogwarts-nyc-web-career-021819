import React, { Component } from 'react'


export default class FilterBar extends Component {

  state = {
    sortBy: "",
    filterGreased: false
  }

  handleSelect= (e) => {
    this.setState({
      sortBy: e.target.value
    }, () => this.props.filterHogs(this.state))
  }

  handleCheck = (e) => {
    this.setState({
      filterGreased: e.target.checked
    }, () => this.props.filterHogs(this.state) )
  }



  render () {
    console.log('state is:', this.state)

    return (
      <form>
        <label>Sort by:</label>
          <select onChange={this.handleSelect} name="hogs">
            <option value="">None</option>
            <option value='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'>Weight</option>
            <option value="name">Name</option>
          </select>
          <label>Greased?</label>
          <input onChange={this.handleCheck} type="checkbox" name="greased" value="true"/>
      </form>
    )
  }
}
