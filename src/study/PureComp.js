import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("hey i am from Pure!!! component");
    return (
      <div>
        PureComp hey {this.props.name}
      </div>
    )
  }
}

export default PureComp