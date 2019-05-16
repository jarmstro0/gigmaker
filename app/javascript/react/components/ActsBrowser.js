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
      <div className="grid-y medium-grid-frame">
        <div className="cell shrink header medium-cell-block-container">
          <div className="grid-x grid-padding-x">
            <div className="cell small-3"></div>
            <div className="cell small-6"><p/></div>
          </div>
        </div>
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x grid-padding-x">
            <div className="cell medium-3 medium-cell-block-y"></div>
            <div className="cell medium-6 medium-cell-block-y">
              {actTileSet}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ActsBrowser;
