import React from 'react'

class HogTile extends React.Component{
  state = {
    side: 'picture'
  }

  handleName=(name)=>{
    return name.toLowerCase().split(' ').join('_')
  }

  handleClick = event => {
   this.setState({
    side: this.state.side === 'picture' ? 'details':'picture'
   })
  }

  hideHog=()=>{
    this.props.removeHog(this.props.hog)
    console.log(this.props.hog);
  }



  render(){

    if(this.state.side === 'picture')
      {return(
          <div>
          <img src = {require(`../hog-imgs/${this.handleName(this.props.hog.name)}.jpg`)} onClick={this.handleClick} />
          <p>{this.props.hog.name}
          <button onClick={this.hideHog}>Hide this hog</button>
          </p>
          </div>
      )} else {
        return <div onClick={this.handleClick}>
          <p>Name: {this.props.hog.name}</p>
          <p>Specialty: {this.props.hog.specialty}</p>
          <p>Greased: {this.props.hog.greased ?  "true" : "false"}</p>
          <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>highest medal achieved: {this.props.hog['highest medal achieved']}</p>
        </div>
      }
  }
}

export default HogTile
