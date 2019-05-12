import React from 'react';

import CalendarTile from './CalendarTile'
import GenreTile from './GenreTile'

class VenueContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searcher: {},
      matches: [],
      selected: null,
      date: new Date().getDate()
    }
    this.clickDown = this.clickDown.bind(this)
    this.clickUp = this.clickUp.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/matcher/venues?date=${this.state.date}`)
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

  render(){
    let name, photo, volume, city, state
    let capacity, genTiles, genres

    let displayed = this.state.matches[this.state.selected]
    if (this.state.selected !== null) {
      name = displayed.name
      photo = displayed.profile_photo.url
      volume = displayed.noise_level
      city = displayed.city
      state = displayed.state
      capacity = displayed.capacity
      genres = displayed.genres

      if (genres.length > 0) {
        genTiles = genres.map ((genre) => {
          return (
            <GenreTile
            key = {genre}
            name = {genre}
            class = {""} />
          )
        })
      }
    }

    return(
    <span>
          <div className="grid-x gm-banner">
            <div className="cell small-4"></div>
            <div className="cell small-1">
              <i onClick={this.clickDown} className="fas fa-caret-square-left fa-3x"></i>
            </div>
            <div className="cell small-3"></div>
            <div className="cell small-1">
              <i onClick={this.clickUp} className="fas fa-caret-square-right fa-3x"></i>
            </div>
          </div>

          <div className="grid-x grid-padding-x grid-padding-y">
            <div className="cell small-4 text-right">
              <CalendarTile />
            </div>
            <div className="cell small-6">
              <img className="matcher-pix" src={photo} />
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="cell small-4">
              <div className="prop-box-right">
                <p>Sound Level:</p>
                <p>Capacity:</p>
                Genres:
              </div>
          </div>
          <div className="cell small-3">
            <div className="prop-box">
              <p>{volume}</p>
              <p>{capacity}</p>
              {genTiles}
            </div>
          </div>
          <div className="cell small-5 top-marg" >
            <h4> {name} </h4>
            <p>{city}, {state}</p>
            <iframe width="95%" height="300" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8ShmOD9344kRVUhqSUgKP-E&key=AIzaSyCTd8b9XL4AdrKB7bWqoBK1E1pr2dzP4jE" allowFullScreen></iframe>
          </div>
        </div>
    </span>
    )
  }
}

export default VenueContainer;
