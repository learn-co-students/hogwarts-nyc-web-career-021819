import React, {Component} from 'react'

class HogTile extends Component {

  state = {
    cardVisible: true,
    descVisible: true
  }

  toggleDescription = () => {
    this.setState ({
      descVisible: !this.state.descVisible
    })
  }

  toggleHogVisibility = () => {
    this.setState ({
      cardVisible: !this.state.cardVisible
    })
  }

  render() {
    return(
    <div style= {{padding: '2em'}}>
      <card className= "ui eight wide column" style={this.state.cardVisible ? {display: 'block'} : {display: 'none'}}>
        <div>
        <img alt='' src={require("../hog-imgs/" + this.props.hog.name.toLowerCase().replace(/ /g,"_") + ".jpg")} onClick={this.toggleDescription}/>
        </div>
        <div>
        Name: {this.props.hog.name}
        </div>
        <div style={this.state.descVisible ? {display: 'block'} : {display: 'none'}}>
          <ul>
            <li>Specialty: {this.props.hog.specialty}</li>
            <li>Greased: {this.props.hog.greased.toString()}</li>
            <li>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} Units</li>
            <li>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</li>
          </ul>
        </div>
      </card>
      <button onClick = {this.toggleHogVisibility} className = "ui primary button">{this.state.cardVisible ? "Hide " + this.props.hog.name + " for a While!" : "Bring " + this.props.hog.name + " Back!"}</button>
    </div>
    )
  }
}

export default HogTile
