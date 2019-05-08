import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import HomeContainer from './HomeContainer'
import MatcherContainer from './MatcherContainer'

export const App = (props) => {
  return (
    <div>
    <Router history={browserHistory}>
          <Route path="/" component={HomeContainer}/>
          <Route path="/matcher" component={MatcherContainer}/>
    </Router>
    </div>
  )
}

export default App
