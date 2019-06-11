import React from 'react';
import moment from 'moment'
import MapContainer from './MapContainer'

class GigShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gig: null
    }
  }

  componentDidMount() {
    fetch(`/api/v1/gigs/${this.props.match.params.id}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage);
          throw(error);
        }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({gig: body})
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let actName, venueName, date, time, price, pix
    let addy_1, addy_2, city, state, showMap


    let gig = this.state.gig
    if (gig != null) {
      actName = gig.act_name
      venueName = gig.venue_name
      date = gig.date
      time = gig.time
      price = gig.tix_price
      pix = gig.photo
      addy_1 = gig.address_1
      addy_2 = gig.address_2
      city = gig.city
      state = gig.state

      showMap = <MapContainer
              lat = {parseFloat(gig.lat)}
              long = {parseFloat(gig.long)}
              />
    }

    return(
      <div className="grid-x grid-padding-x grid-padding-y">
        <div className="cell small-3"></div>
        <div className="cell small-8">
          <div className="card">
            <div className="card-divider text-center">
              <h3>{actName}</h3>
            </div>
            <img className="gig-size" src={pix}/>
            <div className="card-section text-center">
              <h4>at {venueName}</h4>
              <p className="close">
                {date} at {time} -${price}
              </p>
              <div className="grid-x grid-padding-x grid-padding-y">
                <div className="cell small-3 text-left">
                  {addy_1}
                  <br/> {addy_2} {city}, {state}
                </div>
                <div className="cell small-8 text-right">
                  {showMap}
                </div>
              </div>
            </div>
            <div className="card-section gen-green"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default GigShow;
