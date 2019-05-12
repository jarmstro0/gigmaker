import React from 'react';

import CalendarTile from './CalendarTile'
import GenreTile from './GenreTile'
import MediaTile from './MediaTile'

class ActContainer extends React.Component {
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
    fetch(`/api/v1/matcher/acts?date=${this.state.date}`)
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


  render(){
    let name, photo, volume, tag, desc
    let genTiles, state, capacity, genres
    let medOne, medTwo, songOne, songTwo

    let displayed = this.state.matches[this.state.selected]
    if (this.state.selected !== null) {
      name = displayed.name
      photo = displayed.profile_photo.url
      volume = displayed.noise_level
      tag = displayed.tagline
      medOne = displayed.media_1
      medTwo = displayed.media_2
      desc = displayed.description

      genres = displayed.genres
      let dispClass
      let searchGenres = this.state.searcher.genres
      if (genres.length > 0) {
        genTiles = genres.map ((genre) => {
          if (searchGenres.includes(genre)) {
            dispClass = "gen-green"
          } else {
            dispClass = "gen-red"
          }


          return (
            <GenreTile
            key = {genre}
            name = {genre}
            class = {dispClass} />
          )
        })

         if (medOne !== "") {
          songOne = <MediaTile source = {medOne} />
        }

         if (medTwo !== "") {
          songTwo = <MediaTile source = {medTwo} />
        }
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
                  Genres:
                </div>
            </div>
            <div className="cell small-3">
              <div className="prop-box">
                <p>{volume}</p>
              </div>
                {genTiles}

            </div>
            <div className="cell small-5 top-marg" >
              <h4> {name} </h4>
              <h5>{tag}</h5>
              <p>{desc}</p>
              {songOne}
              {songTwo}
            </div>
          </div>
      </span>
    )
  }
}

export default ActContainer;
