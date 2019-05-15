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
    let format = 'h:mm p';
    let now = moment().hour(0).minute(0);

    return(
      <div>
        <p className="close">{this.props.actName} at</p>
        <p className="close">{this.props.venueName} on </p>
        <p className="close">{this.props.date} at</p>

          <label>Time:
            <TimePicker
              showSecond={false}
              defaultValue={now}
              className="small-field"
              onChange={this.onTimeChange}
              format={format}
              use12Hours
              inputReadOnly
            />
          </label>

          <div className="tiny-field close">
            <label>Admission:
              <input name="price" type='text'  onChange={this.handleChangeMethod} />
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
