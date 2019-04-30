import React from 'react'

const Filter = (props) => (
  <div>
  Filter Greased: <input onChange={props.filter} type="checkbox"/>
  <br/>
    <select onChange={props.sort}>
      <option selected disabled value="">Sort By</option>
      <option value="name">Name</option>
      <option value="weight">Weight</option>
    </select>
  </div>
)

export default Filter
