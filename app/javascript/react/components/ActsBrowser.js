import React from 'react';

import ActTile from './ActTile'

class ActsBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acts: []
    }
    this.fetchActs = this.fetchActs.bind(this)
  }

  componentDidMount() {
    this.fetchActs()
  }

  fetchActs() {
    fetch(`/api/v1/acts`)
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
        acts: body.selected
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    let actTileSet = this.state.acts.map((act) => {
      let tag = act.tagline.toUpperCase()
      return(
        <ActTile
        key = {act.id}
        content = {act}
        tagline = {tag}
        />
      )
    })

    return(
      <div>

        <div className="grid-x">
          <div className="cell"></div>
        </div>
        <div className="grid-x grid-padding-y">
          <div className="cell small-3"></div>
          <div className="cell small-7">{actTileSet}</div>
        </div>
      </div>
    )
  }
}

export default ActsBrowser;
