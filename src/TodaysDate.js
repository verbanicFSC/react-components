import React from "react"
import moment from 'moment'

export default class TodaysDate extends React.Component {
  constructor(){
    super()
    this.state = {
      date: moment().format('MM/DD/YYYY hh:mm A')
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: moment().format('MM/DD/YYYY hh:mm A')
    })
  }

  render() {
    return (<div {...this.props}>{`Today's date is ${this.state.date}`}</div>)
  }
}
