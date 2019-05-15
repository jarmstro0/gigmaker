import React from 'react'

const MediaTile = props => {
  return(
    <div>
    <iframe width={props.width} height={props.height} scrolling="no" frameBorder="no" src={props.source}></iframe>
    </div>
  )
}

export default MediaTile;
