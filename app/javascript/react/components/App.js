import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import HomeContainer from './HomeContainer'
import VenueContainer from './VenueContainer'

export const App = (props) => {
  return (
    <div>
    <Router history={browserHistory}>
          <Route path="/" component={HomeContainer}/>
          <Route path="/matcher/venues" component={VenueContainer}/>
    </Router>
    </div>
  )
}

export default App
