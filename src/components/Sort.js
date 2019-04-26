import React from 'react';

class Sort extends React.Component{

  handleChange=event =>{
    {this.props.changeSortValue(event.target.value)};
  }

  render(){
    console.log(this.props);
    return(
      <div>
      <select onChange={this.handleChange}>
        <option value=""></option>
        <option value="name">name</option>
        <option value="weight">weight</option>
      </select>
        greased?
        <input type="checkbox" onChange={e=>this.props.checked()}/>
      </div>
    )
  }
}

export default Sort
