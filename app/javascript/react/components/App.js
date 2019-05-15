import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import HomeContainer from './HomeContainer'
import VenueContainer from './VenueContainer'
import ActContainer from './ActContainer'
import ActsBrowser from './ActsBrowser'

export const App = (props) => {
  return (
    <div>
    <Router history={browserHistory}>
          <Route path="/" component={HomeContainer}/>
          <Route path="/matcher/venues" component={VenueContainer}/>
          <Route path="/matcher/acts" component={ActContainer}/>
          <Route path="/acts" component={ActsBrowser}/>
    </Router>
    </div>
  )
}

export default App
