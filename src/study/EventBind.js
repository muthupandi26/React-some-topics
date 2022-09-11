import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message : "Hlo world",
        }

        this.clickHandler = this.clickHandler.bind(this); // 3rd method
    }

    clickHandler() {
        this.setState({
            message : "Good Byee!",
        })
    }

    clickHandlerFourthMethod = () => {
        this.setState({
            message : "Good bye 4th method",
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>hey State !</button> */}
        {/* <button onClick={ () => this.clickHandler()}>hey State !</button> */}
        <button onClick={this.clickHandler}>hey State !</button>
        {/* <button onClick={this.clickHandlerFourthMethod}>hey State !</button> */}
      </div>
    )
  }
}

export default EventBind