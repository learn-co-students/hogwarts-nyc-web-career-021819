import React from 'react'
import HogTile from './HogTile'
import v4 from 'uuid'

class HogIndex extends React.Component {
    hogData = () => {
        return this.props.hogs.map(hog => {
            return (
                <HogTile key={v4()}{...hog} /> 
            )
        })
    }

    render () {
        return (
            <div>
                {this.hogData()}
            </div>
        )
    }
}

export default HogIndex