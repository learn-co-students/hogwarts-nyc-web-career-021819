import React from 'react'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class HogDetail extends React.Component {

    render(){
        return (
            <div>
                Medal: {this.props.details["highest medal achieved"]}
                Specialty: {this.props.details.specialty}
                Weight: {this.props.details[weight]}
                Greased: {this.props.details.greased ? "I'm greased" : "I'm not greased"}
            </div>
        )
    }
}

export default HogDetail