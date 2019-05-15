import React from 'react';
import moment from 'moment'

import PropTile from './PropTile'
import MapContainer from './MapContainer'
import Calendar from 'react-calendar'
import GigForm from './GigForm'


class VenueContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searcher: {},
      matches: [],
      selected: null,
      date: moment().format("YYYY-MM-DD"),
      today: new Date(),
      showForm: false,
      gigTime: null,
      tixPrice: null
    }
    this.clickDown = this.clickDown.bind(this)
    this.clickUp = this.clickUp.bind(this)
    this.fetchActs = this.fetchActs.bind(this)
    this.calendarChange = this.calendarChange.bind(this)
    this.toggleGigForm = this.toggleGigForm.bind(this)
    this.createNewGig = this.createNewGig.bind(this)
  }

  componentDidMount() {
    console.log("mount")
    this.fetchActs(this.state.date)
  }

  fetchActs(fetchDate) {
    fetch(`/api/v1/matcher/venues?date=${fetchDate}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}(${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body)

      this.setState({
        matches: body.venuematch,
        searcher: body.act_search[0],
        selected: 0
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  clickDown() {
    if (this.state.selected > 0) {
      this.setState({selected: this.state.selected - 1})
    }
  };

  clickUp() {
    if ((this.state.selected + 1) < this.state.matches.length) {
      this.setState({selected: this.state.selected + 1})
    }
  };

  calendarChange(event) {
    let new_date = moment(event).format("YYYY-MM-DD")
    this.setState({date: new_date})
    this.fetchActs(new_date)
  }

  toggleGigForm() {
    console.log("toggle" + this.state.showForm)
    this.setState({showForm: !this.state.showForm})
  }

  createNewGig(formPayload) {
    let price = parseInt(formPayload.tixPrice)
    let time = formPayload.time.format()

    let postPayload = {
      act_id: this.state.searcher.id,
      venue_id: this.state.matches[this.state.selected].id,
      date: formPayload.date,
      start_time: time,
      tix_price: price
    }

    fetch(`/api/v1/gigs`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postPayload)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}(${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({
        stop: body.stop,
        reviews: body.reviews,
        errors: body.errors
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){
    console.log("render")
    let name, photo, volume, city, state, id
    let capacity, genTiles, genres, showMap

    let displayed = this.state.matches[this.state.selected]
    if (this.state.selected !== null) {
      name = displayed.name
      photo = displayed.profile_photo.url
      city = displayed.city
      state = displayed.state
      capacity = displayed.capacity
      genres = displayed.genres
      volume = displayed.noise_level
      id = displayed.id

      showMap = <MapContainer
              lat = {displayed.lat}
              long = {displayed.long}
              />

      if (genres.length > 0) {
        genTiles = genres.map ((genre, index) => {
          return (
            <PropTile
            key = {index}
            name = {genre}
            class = {""} />
          )
        })
      }
    }

    return(
        <span>

          <div className="grid-x gm-banner grid-padding-y">
            <div className="cell small-4"></div>
            <div className="cell small-7 text-center"></div>
          </div>

          <div className="grid-x grid-padding-x grid-padding-y">
            <div className="cell small-4 flex-to-right">
              <Calendar onChange={ this.calendarChange} value={ this.state.today}/>
            </div>
            <div className="cell small-7 align-center">
              <i onClick={this.clickDown} className="fas fa-caret-left fa-6x icon-orange" />
              <img className="matcher-pix" src={photo} />
              <i onClick={this.clickUp} className="fas fa-caret-right fa-6x icon-orange" />
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="cell small-4 medium-4">
            <button onClick={this.toggleGigForm} type="button" className="button large medium-down-expanded">
            Make That Gig
            </button>
            {this.state.showForm &&
              <GigForm
              actName = {this.state.searcher.name}
              venueName = {name}
              date = {moment(this.state.date).format("MMMM D")}
              onFormSubmit = {this.createNewGig}
              />
            }
            </div>
            <div className="cell small-2">
              <p className="prop-box">Capacity: {capacity}</p>
              <p className="prop-box">Volume: {volume}</p>
              {genTiles}
            </div>
            <div className="cell small-5 top-marg">
              <h4> {name} </h4>
              {city}, {state}
              <div>
                {showMap}
              </div>
            </div>
          </div>

    </span>
    )
  }
}

export default VenueContainer;
