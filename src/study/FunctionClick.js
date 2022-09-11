import React from 'react'

function FunctionClick() {

    function clickHandler() {
        alert("hey react!");
        console.log("hey console");
    }

  return (
    <div>
        <button onClick={clickHandler}>Click me!</button>
    </div>
  )
}

export default FunctionClick