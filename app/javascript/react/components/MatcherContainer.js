import React from 'react';

class MatcherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searcher: null,
      matches: []
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
      this.setState({ matches: body.matches })
      this.setState({ searcher: body.searcher })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div className="grid-y medium-grid-frame">
    <div className="cell shrink header medium-cell-block-container">
      <div className="grid-x grid-padding-x">
        <div className="cell small-3">
        Hello 1
        </div>
        <div className="cell small-8">
          <p></p>
        </div>
      </div>
    </div>
    <div className="cell medium-auto medium-cell-block-container">
      <div className="grid-x grid-padding-x">
        <div className="cell medium-3 medium-cell-block-y">
        </div>
        <div className="cell medium-6 medium-cell-block-y">
          <h2>Upcoming Gigs</h2>

        </div>
      </div>
    </div>
    <div className="cell shrink footer">
      <h3>Here's my footer</h3>
    </div>
  </div>
    )
  }
}

export default MatcherContainer;
