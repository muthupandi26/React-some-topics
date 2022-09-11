import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log("hey i am from Regular component");
    return (
      <div>
        RegComp hey {this.props.name}
      </div>
    )
  }
}

export default RegComp