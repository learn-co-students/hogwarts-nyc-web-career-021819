import React, { Component } from 'react'
import HogCardDetails from './HogCardDetails'

export default class HogCard extends Component {

  state = {
    clicked: false
  }
  // `../hog-imgs/${this.props.img}`

  nameConverter = (name) => {
    return name.toLowerCase().replace(/ /g,"_")
  }

  // renderImg = () => {
  //   return
  //     <div>
  //       <img src={require(`../hog-imgs/${this.nameConverter(this.props.name)}`)}/>
  //     </div>
  // }

  renderDetails = () => {
    if(this.state.clicked){
      return <div>
        <HogCardDetails hog={this.props.hog} />
      </div>
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render () {

    return(

      <div>
        <div>
          <h3>{this.props.hog.name}</h3>
          <img src={`/hog-imgs/${this.nameConverter(this.props.hog.name)}.jpg`} onClick={this.handleClick}/>
          {this.renderDetails()}
        </div>
      </div>

    )
  }

}
