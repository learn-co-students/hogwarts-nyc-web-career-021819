import React from 'react';
import HogTile from './HogTile'

class Hog extends React.Component {

    render(){
        return (
        <div>
            {this.props.hogs.map( hog => {
                return <HogTile  hog={hog} hogName={hog.name.toLowerCase().replace(/ /g, "_")}/>
            })}
        </div>)
    }
}

export default Hog

