import React from 'react';

import DateTimeField from './DateTimeField'
import GigTile from './GigTile'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gigs: [],
      date: moment().format()
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/gigs?date=${this.state.date}`)
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
      this.setState({ gigs: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleChange(date) {
    console.log(date)

    this.setState({
      startDate: date["_i"]
    });
    console.log(this.state.startDate)
  }


  render(){
    let gig_list = this.state.gigs.map((gig) => {

        return (
          <GigTile
            key = {gig.id}
            name = {gig.event_name}
            act = {gig.act_name}
            venue = {gig.venue_name}
            name = {gig.event_name}
            date = {gig.date}
            time = {gig.time}
            tix = {gig.tix_price}
            photo = {gig.photo}
          />
        )
      })

    return(
      <div className="grid-y medium-grid-frame">
    <div className="cell shrink header medium-cell-block-container">
      <div className="grid-x grid-padding-x">
        <div className="cell small-3">
          <div className="short-field">
            <DateTimeField />
          </div>
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
          <h2>Today's Gigs</h2>
          {gig_list}
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

export default HomeContainer;
