
import React from 'react'
import ReactDOM from 'react-dom'

import App from '../react/components/App'
import RedBox from 'redbox-react'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        ReactDOM.render(<App />, reactElement)
      } catch (e) {
        ReactDOM.render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      ReactDOM.render(<App />, reactElement)
    }
  }
})
