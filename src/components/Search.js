import React from "react"

class Search extends React.Component{


    render () {
        console.log(this.state)
        return (
            <form  >
                <input name="input" value={this.props.filterValue} onChange={this.props.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}

export default Search