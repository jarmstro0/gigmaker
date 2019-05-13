import React from 'react'
import moment from 'moment'

const DateTimeField = props => {
  return(
    <label>{props.label}
      <input
      name={props.name}
      type='date'
      value={moment()}
      onChange={props.handleChangeMethod}
      />
    </label>
  )
}

export default DateTimeField;
