import React from 'react';
import moment from 'moment'
import {Route, Redirect, browserHistory} from 'react-router'

import PropTile from './PropTile'
import Calendar from 'react-calendar'
import MediaTile from './MediaTile'
import GigForm from './GigForm'

class ActContainer extends React.Component {
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
    this.calendarChange = this.calendarChange.bind(this)
    this.fetchVenues = this.fetchVenues.bind(this)
    this.toggleGigForm = this.toggleGigForm.bind(this)
    this.createNewGig = this.createNewGig.bind(this)
  }

  componentDidMount() {
    console.log("mount")
    this.fetchVenues(this.state.date)
  }

  fetchVenues(fetchDate) {
    fetch(`/api/v1/matcher/acts?date=${fetchDate}`)
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
      this.setState({
        matches: body.actmatch,
        searcher: body.venue_search[0],
        selected: 0 })
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
    this.fetchVenues(new_date)
  }

  toggleGigForm() {
    console.log("toggle" + this.state.showForm)
    this.setState({showForm: !this.state.showForm})
  }

  createNewGig(formPayload) {
    let price = parseInt(formPayload.tixPrice)
    let time = formPayload.time.format()
    console.log(time)

    let postPayload = {
      act_id: this.state.matches[this.state.selected].id,
      venue_id: this.state.searcher.id,
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
      browserHistory.push(`/gigs/${body}`)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let name, photo, volume, tag, desc
    let genTiles, state, capacity, genres
    let medOne, medTwo, songOne, songTwo
    let venueNameUC

    let mediaWidth = "95%"
    let mediaHeight = "150"

    let displayed = this.state.matches[this.state.selected]
    if (this.state.selected !== null) {
      name = displayed.name
      photo = displayed.profile_photo.url
      tag = displayed.tagline
      medOne = displayed.media_1
      medTwo = displayed.media_2
      desc = displayed.description

      venueNameUC = this.state.searcher.name.toUpperCase()

      volume = <PropTile
                  name = {displayed.noise_level}
                  class = {dispClass} />

      genres = displayed.genres
      let dispClass
      let searchGenres = this.state.searcher.genres
      if (genres.length > 0) {
        genTiles = genres.map ((genre, index) => {
          if (searchGenres.includes(genre)) {
            dispClass = "gen-green"
          } else {
            dispClass = "gen-red"
          }

          return (
            <PropTile
            key = {index}
            name = {genre}
            class = {dispClass} />
          )
        })

         if (medOne !== "") {
          songOne = <MediaTile
          source = {medOne}
          width = {mediaWidth}
          height = {mediaHeight} />
        }

         if (medTwo !== "") {
          songTwo = <MediaTile source = {medTwo}
          width = {mediaWidth}
          height = {mediaHeight} />
        }
      }
    }


    return(
      <span>
        <div className="grid-x grid-padding-x grid-padding-y">
          <div className="cell small-1"></div>
          <div className="cell small-8 medium-6 align-center text-center">
            <i onClick={this.clickDown} className="fas fa-caret-left fa-6x icon-orange" />
            <img className="matcher-pix" src={photo} />
            <i onClick={this.clickUp} className="fas fa-caret-right fa-6x icon-orange" />
            <br/>
            <br/>
            <h3> {name} </h3>
            <div className="grid-x grid-padding-x">
              <div className="cell">
                <h5>{tag}</h5>
                <p>{desc}</p>
                <div className="flex-to-row text-right">
                {songOne} {songTwo}
                </div>
              </div>
            </div>
          </div>



        <div className="cell small-4 medium-3">
          <Calendar onChange={ this.calendarChange} value={ this.state.today}/>
          <br/><br/>
          {!this.state.showForm &&
            <button onClick={this.toggleGigForm} type="button" className="button large medium-down-expanded">
          Make That Gig
          </button>}

          {this.state.showForm &&
            <GigForm
            actName = {name}
            venueName = {venueNameUC}
            date = {this.state.date}
            onFormSubmit = {this.createNewGig}
            />
          }
        </div>

      </div>


      </span>
    )
  }
}

export default ActContainer;
