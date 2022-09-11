import React from 'react'
import './myStyles.css'

function Stylesheet(props) {

    const className = props.primary ? 'primary' : '';
    const heading = {
        fontSize : '72px',
        color : 'blue',
    }

  return (
    <div className= {className}>
        Stylesheet
        <h3 style={heading}>i am inline</h3>
    </div>
  )
}

export default Stylesheet