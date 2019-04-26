import React from 'react'

const HogInfo = (props) => {
  const weightInfo = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
  const highestMedal = "highest medal achieved"
  const { specialty, greased } = props.hog
  return (props.showDetails ? (
    <div>
      <p>Specialty: {specialty}</p>
      <p>Greased: {(greased ? "greased" : "not greased")}</p>
      <p>Weigh Ratio: {props.hog[weightInfo]} </p>
      <p>Highest Medal: {props.hog[highestMedal]} </p>
    </div>
  ) : null)
}

export default HogInfo
