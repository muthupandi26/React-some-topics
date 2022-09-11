import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name : 'muthu'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name : 'muthu'
            })
        }, 2000)
    }

  render() {
    console.log("hey i am from parent component");
    return (
      <div>
        ParentComp hey
        <MemoComp name = {this.state.name} />
        {/* <RegComp name = {this.state.name} />
        <PureComp name = {this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp