import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={ () => props.greetHandler("muthu")}> hey saturday !.. </button>
    </div>
  )
}

export default ChildComponent