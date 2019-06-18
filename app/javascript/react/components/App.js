import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import HomeContainer from './HomeContainer'
import VenueContainer from './VenueContainer'
import ActContainer from './ActContainer'
import ActsBrowser from './ActsBrowser'
import GigShow from './GigShow'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/matcher/venues" component={VenueContainer}/>
          <Route exact path="/matcher/acts" component={ActContainer}/>
          <Route exact path="/acts" component={ActsBrowser}/>
          <Route exact path='/gigs/:id' component={GigShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
