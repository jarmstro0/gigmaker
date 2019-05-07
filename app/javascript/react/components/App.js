import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import HomeContainer from './HomeContainer'

export const App = (props) => {
  return (
    <div>
    <Router history={browserHistory}>
          <Route path="/" component={HomeContainer}/>
    </Router>
    </div>
  )
}

export default App
