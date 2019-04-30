import React from 'react'
import HogCard from './HogCard'
import v4 from 'uuid'

const HogIndex = ({hogs}) => {
  const renderHogs = () => hogs.map(hog => < HogCard key={v4()} {...hog} />)

  return(
    <div className="ui grid container">
    {renderHogs()}
    </div>
  )
}

export default HogIndex
