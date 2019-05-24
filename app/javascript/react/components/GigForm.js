import React from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';


class GigForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tixPrice: null,
      time: null
    }
    this.handleChangeMethod = this.handleChangeMethod.bind(this)
    this.onTimeChange = this.onTimeChange.bind(this)
    this.submitGigForm = this.submitGigForm.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChangeMethod(event) {
    this.setState({tixPrice: event.target.value})
  }

  onTimeChange(value) {
    this.setState({time: value})
  }

  clearForm() {
    this.setState({tixPrice: null, time: null})
  }

  submitGigForm(event) {
    event.preventDefault()
    let payload={
      tixPrice: this.state.tixPrice,
      time: this.state.time,
      date: this.props.date
    }
    this.props.onFormSubmit(payload)
    this.clearForm()
  }

  render(){
    let showDate = moment(this.props.date).format("MMMM D")

    let format = 'h:mm p';
    let now = moment().hour(0).minute(0);

    return(
      <div className="gig-form">
        <p><b>{this.props.actName}</b> at</p>
        <p className="tight"><b>{this.props.venueName}</b> on </p>
        <p className="tight"><b>{showDate}</b> at</p>

          <label>Time:<br/>
            <TimePicker
              showSecond={false}
              defaultValue={now}
              className="short-field"
              onChange={this.onTimeChange}
              format={format}
              use12Hours
            />
          </label>

          <div className="tiny-field close">
            <label>Admission:
              <input placeholder="$" name="price" type='text'  onChange={this.handleChangeMethod} />
            </label>
          </div>

          <button
            onClick={this.submitGigForm}
            type="button"
            className="button large medium-down-expanded">
            Make That Gig
          </button>
      </div>
    )
  }
}

export default GigForm;
