import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>
            {person.id} and my name is {person.name} my skils are {person.skill}
        </h2>
    </div>
  )
}

export default Person