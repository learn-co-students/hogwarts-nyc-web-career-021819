import React, { Fragment } from 'react'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class HogTile extends React.Component{
    state ={
        specialty: "",
        greased: true,
        HMA: "",
        weight: ""
    }


    onHogTileClick = (e) => (
        this.setState({
            specialty: this.props.hog.specialty,
            greased: this.props.hog.greased ? "GO GREASE LIGHTNING": "Can't touch this",
            HMA: this.props.hog["highest medal achieved"],
            weight: this.props.hog[weight]

        })
    )
    
    render(){
        return (
        <Fragment>
        <div onClick={this.onHogTileClick} id={this.props.hog.name} className="pigTile">
            {this.props.hog.name}
            <div>
                <img id={this.props.hog.name} src={require(`../hog-imgs/${this.props.hogName}.jpg`)} />
               
                    <h4>{this.state.HMA}</h4>
                    <h4>{this.state.greased}</h4>
                    <h4>{this.state.specialty}</h4>
                    <h4>{this.state.weight}</h4>

            </div>
        </div>
    </Fragment>
        )
    }

} 

export default HogTile