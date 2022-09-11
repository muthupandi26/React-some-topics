import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName : 'hey parent',
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(check) {
        alert(`hey backticks ${this.state.parentName}, cool ${check}`); 
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent