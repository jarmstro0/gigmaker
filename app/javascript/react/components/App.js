import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import HomeContainer from './HomeContainer'
import VenueContainer from './VenueContainer'
import ActContainer from './ActContainer'

export const App = (props) => {
  return (
    <div>
    <Router history={browserHistory}>
          <Route path="/" component={HomeContainer}/>
          <Route path="/matcher/venues" component={VenueContainer}/>
          <Route path="/matcher/acts" component={ActContainer}/>
    </Router>
    </div>
  )
}

export default App
