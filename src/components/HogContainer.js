import React, { Component } from 'react'
import HogCard from './HogCard'
import Filter from './Filter'

class HogContainer extends Component {

  state = {
    image: [],
    hogData: [],
    value: ''
  }

  componentDidMount() {
    this.setState({ hogData: this.props.hogs })
  }

  onChange = (e) => {
    this.setState({ value: e.target.value })
  }

  sortHogs = () => {
    const hogArray = [...this.props.hogs]
    switch (this.state.value) {
      case ('name'):
        hogArray.sort(function (a, b) {
          return a.name.localeCompare(b.name)
        })
        break;
      case ('weight'):
        hogArray.sort(function (a, b) {
          return a.weight - b.weight
        })
        break;
      case ('greased'):
        hogArray.sort(function (a, b) {
          return (a === b) ? 0 : a ? -1 : 1;
        })
        break;
      default:
        break;;
    }
    return hogArray
  }

  render() {
    return (
      <div className="ui grid container">
        <Filter onChange={this.onChange} />
        {this.sortHogs().map(hog =>
          <HogCard hog={hog} onClick={this.onClick} />)}

      </div>
    )
  }
}

export default HogContainer