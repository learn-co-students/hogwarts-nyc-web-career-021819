import React from 'react'
import HogTile from './HogTile'

class Hogs extends React.Component{


  renderHogs = () => {
    return this.props.hogs.map(h=>{
      return <HogTile hog={h} removeHog={this.props.removeHog}/>
    })
  }

  // greasedHog=(checked='')=>{
  //   return this.props.hogs.filter(h => {
  //       return h.greased === checked
  //     })
  // }


 render(){
   console.log(this.props.hogs);
   return(
     <div>
     {this.renderHogs()}
     </div>
   )
 }
}

export default Hogs
