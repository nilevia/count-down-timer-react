import React, {Component} from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'


export class CountDownHourly extends Component {

  static propTypes = {
    endDate: PropTypes.string,
    hourAffix: PropTypes.string,
    minutesAffix: PropTypes.string,
    secondAffix: PropTypes.string,
    className: PropTypes.string,
    onFinish: PropTypes.func

  }

  constructor(props) {
    super(props);
    this.state = {
      countDown: {
        hour: 0,
        min: 0,
        sec: 0,
      },
      hourAffix: '',
      minutesAffix: '',
      secondAffix: '',
      operator: ':'
    }
  }

  componentDidMount() {
    if (this.props.hourAffix) this.setState({hourAffix: this.props.hourAffix});
    if (this.props.minutesAffix) this.setState({minutesAffix: this.props.minutesAffix});
    if (this.props.secondAffix) this.setState({secondAffix: this.props.secondAffix});
    if (this.props.operator) this.setState({operator: this.props.operator});

    this.interval = setInterval(() => {
      const date =  this.getCountDownHourly(this.props.endDate);
      date ? this.setState({ countDown: date }) : clearInterval(this.interval);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCountDownHourly(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff < 0){
      if (this.props.onFinish) this.props.onFinish()
      return false;
    }


    const timeLeft = {
      hour: 0,
      min: 0,
      sec: 0,
    };

    if (diff >= 3600) { // 60 * 60
      timeLeft.hour = Math.floor(diff / 3600);
      diff -= timeLeft.hour * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  render() {
    const { hour, min, sec }  = this.state.countDown;
    const { hourAffix, minutesAffix, secondAffix, operator }  = this.state;
    return (
      <p className={this.props.className}>{`
        ${addLeadingZeros(hour)} ${hourAffix}
        ${operator} ${addLeadingZeros(min)} ${minutesAffix}
        ${operator} ${addLeadingZeros(sec)} ${secondAffix}
      `}</p>
    )
  }
}

export class CountDownDaily extends Component {

  static propTypes = {
    endDate: PropTypes.string,
    dayAffix: PropTypes.string,
    hourAffix: PropTypes.string,
    minutesAffix: PropTypes.string,
    secondAffix: PropTypes.string,
    className: PropTypes.string,
    onFinish: PropTypes.func

  }

  constructor(props) {
    super(props);
    this.state = {
      countDown: {
        day: 0,
        hour: 0,
        min: 0,
        sec: 0,
      },
      dayAffix: '',
      hourAffix: '',
      minutesAffix: '',
      secondAffix: '',
      operator: ':'
    }

  }

  componentDidMount() {
    if (this.props.dayAffix) this.setState({dayAffix: this.props.dayAffix});
    if (this.props.hourAffix) this.setState({hourAffix: this.props.hourAffix});
    if (this.props.minutesAffix) this.setState({minutesAffix: this.props.minutesAffix});
    if (this.props.secondAffix) this.setState({secondAffix: this.props.secondAffix});
    if (this.props.operator) this.setState({operator: this.props.operator});

    this.interval = setInterval(() => {
      const date =  this.getCountDownHourly(this.props.endDate);
      date ? this.setState({ countDown: date }) : clearInterval(this.interval);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCountDownHourly(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff < 0){
      if (this.props.onFinish) this.props.onFinish()
      return false;
    }

    const timeLeft = {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
    };
    if (diff >= 86400) { // 60 * 60
      timeLeft.day = Math.floor(diff / 86400);
      diff -= timeLeft.day * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hour = Math.floor(diff / 3600);
      diff -= timeLeft.hour * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  render() {
    const { day, hour, min, sec }  = this.state.countDown;
    const { dayAffix, hourAffix, minutesAffix, secondAffix, operator }  = this.state;
    return (
      <p className={this.props.className}>{`
        ${addLeadingZeros(day)} ${dayAffix}
        ${operator} ${addLeadingZeros(hour)} ${hourAffix}
        ${operator} ${addLeadingZeros(min)} ${minutesAffix}
        ${operator} ${addLeadingZeros(sec)} ${secondAffix}
      `}</p>
    )
  }
}

function addLeadingZeros(val) {
  let value = String(val);
  while (value.length < 2) {
    value = `0${value}`;
  }
  return value;
}
