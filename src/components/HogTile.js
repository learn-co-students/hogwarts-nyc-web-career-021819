import React from 'react'
import HogDetail from './HogDetail'


class HogTile extends React.Component{
    state ={
        clicked: false
    }

    changeName = (hogName) => {
        return `${hogName.toLowerCase().split(" ").join("_")}.jpg`
    }

    clickedForDetails = () => {
        this.setState(prevState => ({
                clicked: !prevState.clicked
                })
        ) 
    }

    addDetails = () => {
       return this.state.clicked && <HogDetail details={this.props} /> 
    } 

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.changeName(this.props.name)} alt=""/>
                <button onClick={this.clickedForDetails}>Click for more details!</button>
                {this.addDetails()}
            </div>
        )
    }
}

export default HogTile