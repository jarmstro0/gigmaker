import React from 'react'

const GigTile = props => {
  let tickets
  if (props.tix == 0) {
    tickets = "Free"
  } else {
    tickets = `$${props.tix}`
  }

  return(
    <div className="card">
      <div className="card-divider text-center">
        <h3>{props.name}</h3>
      </div>
      <img src="./public/3-singersongwriter-sheaffer.jpg"/>
      <div className="card-section text-center">
        <h3>{props.act}</h3>
        <h5>at {props.venue}</h5>
        <p>{props.date}, {props.time} - {tickets}</p>
      </div>
    </div>
  )
}

export default GigTile;
