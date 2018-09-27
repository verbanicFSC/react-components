import React from "react"

export default class TodaysDate extends React.Component {
  constructor(){
    super()
    this.state = {
      date: new Date()
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
      date: new Date()
    })
  }

  render() {
    return (<div {...this.props}>{`Today's date is ${this.state.date.toLocaleTimeString()}`}</div>)
  }
}
