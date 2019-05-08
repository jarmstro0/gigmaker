import React from 'react';

import GigTile from './GigTile'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gigs: [],
      date: new Date()
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
        <div className="cell small-4">
          <DatePicker
          selected={moment(this.state.date)}
          onChange={this.handleChange}
          />
        </div>
        <div className="cell small-8">
          <p>A medium 8 cell block... on medium this content should overflow and let you horizontally scroll across... one might use this for an array of options</p>
        </div>
      </div>
    </div>
    <div className="cell medium-auto medium-cell-block-container">
      <div className="grid-x grid-padding-x">
        <div className="cell medium-4 medium-cell-block-y">
          <h2>Independent scrolling sidebar</h2>
        </div>
        <div className="cell medium-6 medium-cell-block-y">
          <h2>Independent scrolling body</h2>
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
