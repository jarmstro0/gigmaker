import React from 'react'

const GigTile = props => {
  let link = `/gigs/${props.id}`
  let tickets
  if (props.tix == 0) {
    tickets = "Free"
  } else {
    tickets = `$${props.tix}`
  }

  return(
    <a href={link}>
    <div className="card">
      <div className="card-divider text-center">
        <h3>{props.act}</h3>
      </div>
      <img className="gig-size" src={props.photo}/>
      <div className="card-section text-center">
        <h3>at {props.venue}</h3>
        <p>{props.time} - {tickets}</p>
      </div>
    </div>
    </a>
  )
}

export default GigTile;
