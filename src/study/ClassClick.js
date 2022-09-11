import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler() {
        alert("I am from class components");
    }


  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>hey class Click !!</button>
      </div>
    )
  }
}

export default ClassClick