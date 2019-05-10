import React from 'react';

import CalendarTile from './CalendarTile'

class VenueContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searcher: null,
      searcherType: null,
      matches: [],
      selected: null
    }
  }

  componentDidMount() {
    fetch(`/api/v1/matcher`)
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
        matches: body.matches,
        searcher: body.searcher[0],
        searcherType: body.searcher_type,
        selected: 0 })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){
    let name, photo, volume, tag, desc

    if (this.state.selected !== null) {
      name = this.state.matches[this.state.selected].name
      photo = this.state.matches[this.state.selected].profile_photo
      volume = this.state.matches[this.state.selected].noise_level
    }
    else {
      name = ''
      photo = ''
      volume = ''
    }

    return(
    <span>
          <div className="grid-x grid-padding-y">
            <div className="cell small-6 gm-banner"></div>
            <div className="cell small-6 gm-banner">
              <h3>{name}</h3>
            </div>
          </div>

          <div className="grid-x grid-padding-x grid-padding-y">
            <div className="cell small-4 text-right">
              <CalendarTile />
            </div>
            <div className="cell small-6">
              <img src={photo} />
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="cell small-4">
              <div className="prop-box-right">
                Your Sound Level:
              </div>
          </div>
          <div className="cell small-3">
            <div className="prop-box">
              {volume}
            </div>
          </div>
          <div className="cell small-5 top-marg" >
            <h5> Band tagline here </h5>
          </div>
        </div>

        <div className="grid-x grid-padding-x">
          <div className="cell small-4">
            <div className="prop-box-right">
              Your Genres:
            </div>
        </div>
        <div className="cell small-3">
          <div className="prop-box">
            Genres:
          </div>
        </div>
        <div className="cell small-5 top-marg" >
          <p> Band description here sdljsd ksdlsdlk sdl ksd lsdlk sdlk sdlk sdl ksdl ksdl klaselkoie lsk lkd </p>

          <iframe width="95%" height="150" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346120807&color=%23192c24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <iframe width="95%" height="150" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346120802&color=%23192c24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
      </div>
    </span>
    )
  }
}

export default VenueContainer;
