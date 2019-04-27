import React, { Component } from 'react'

export default class HogCardDetails extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>{this.props.hog.name}</li>
          <li>Greased: {this.props.hog.greased ? "Yes" : "No"}</li>
          <li>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
        </ul>
      </div>
    )
  }
}
