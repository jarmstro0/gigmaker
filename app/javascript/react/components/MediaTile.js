import React from 'react'

const MediaTile = props => {
  return(
    <div>
    <iframe width="95%" height="150" scrolling="no" frameBorder="no" src={props.source}></iframe>
    </div>
  )
}

export default MediaTile;
