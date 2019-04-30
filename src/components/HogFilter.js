import React from 'react'


class HogFilter extends React.Component {
    state = {
        input: ""
    }

    onChange = (e) => {
        this.setState({
            input: e.target.value
        }, () => {
            if(this.state.input === "name") {
                this.props.hogName()
            } else if (this.state.input === "weight"){
                this.props.hogWeight()
            }
        })
    }  

    render(){
        
        return (
            <div>
                <select onChange ={this.onChange}>
                    <option selected disabled value="name">Sort by...</option>
                    <option value="name" selected="">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
        )
    }
}

export default HogFilter