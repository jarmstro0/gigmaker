import React from 'react'
import MediaTile from './MediaTile'


const ActTile = props => {
  let width = "95%"
  let height = "100"

  return(
    <div>
    <div className="card">
      <div className="card-divider text-center">
        <h3>{props.content.name}</h3>
      </div>
      <img className="gig-size" src={props.content.profile_photo.url}/>
      <div className="card-section text-center">
        <h5>{props.tagline}</h5>
        <p>{props.content.description}</p>
        </div>
      <div className="card-section text-center card-media">

        <MediaTile
        source = {props.content.media_1}
        width = {width}
        height = {height} />

        <MediaTile
        source = {props.content.media_2}
        width = {width}
        height = {height} />

      </div>
      <div className="card-section black-back"></div>
    </div>
    </div>
  )
}

export default ActTile;
