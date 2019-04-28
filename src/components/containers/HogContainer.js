import React, {Component} from 'react'
import HogTile from '../HogTile.js'

class HogContainer extends Component {
  renderHogs = () => {
    let hogArray = this.props.hogs.map(hog => {
      return <HogTile key={hog.name} hog={hog}/>
    })
    return hogArray
  }
  render () {
    return (<div className = "ui grid container">{this.renderHogs()}</div>)
  }
}

export default HogContainer
