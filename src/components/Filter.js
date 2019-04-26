import React, { Component } from 'react'
import hogs from '../porkers_data';

class Filter extends Component {

  render() {
    return (
      <form>
        <select onChange={this.props.onChange}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="greased">Greased</option>
        </select>
      </form>
    )
  }
}


export default Filter
