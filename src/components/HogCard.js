import React from 'react'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class HogCard extends React.Component {

  state = {
    showDetails: false
  }

  handleClick = (e) => {
      this.setState(prevState => ({
        showDetails: !prevState.showDetails
      }))
  }

  showDetails = () => {
    return(
      <div>
        <h4>Weight:<br/>{this.props[weight]} lbs.</h4>
        <h4>Specialty:<br/>{this.props.specialty}</h4>
        <h4>Greased:<br/>{this.props.greased ? 'Yes' : 'No'}</h4>
        <h4>Medal:<br/>{this.props['highest medal achieved']}</h4>
      </div>
    )
  }

  showImg = () => {
    const img = this.props.name.split(' ').join('_')
    return <img src={`/hog-imgs/${img}.jpg`} alt="img" />
  }

  render(){
    return(
      <div className="ui eight wide column">
        <h3>{this.props.name}</h3>
        <button onClick={this.handleClick}> Show Details </button>
        <br /><br />
        {this.state.showDetails ? this.showDetails() : this.showImg() }
      </div>
    )
  }
}

export default HogCard
