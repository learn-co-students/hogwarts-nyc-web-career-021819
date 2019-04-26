
import React, { Component } from 'react'
import HogInfo from './HogInfo';

class HogCard extends Component {

  state = {
    hogInfo: false
  }

  handleClick = () => {
    this.setState({ hogInfo: !this.state.hogInfo })

  }

  renderHogImages(name) {
    const hogName = name.toLowerCase().split(" ").join('_')
    return hogName
  }

  render() {
    return (
      <div className="ui eight wide column" >
        <img src={require(`../hog-imgs/${this.renderHogImages(this.props.hog.name)}.jpg`)} />
        <p onClick={this.handleClick}>{this.props.hog.name} </p>
        <HogInfo
          showDetails={this.state.hogInfo}
          hog={this.props.hog}
        />
      </div>
    )
  }
}

export default HogCard