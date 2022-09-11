import React from 'react'
import Person from './Person';

function NameList() {

    const persons = [
        {
            id : 1,
            name : 'don',
            age : 25,
            skill : 'react'
        },
        {
            id : 2,
            name : 'hey',
            age : 45,
            skill : 'express'
        },
        {
            id : 3,
            name : 'hit',
            age : 36,
            skill : 'nodes'
        }
]


    const names = ['hey', 'check', 'new one'];
    const personList = persons.map(person => <Person key={person.id} person = {person} />)
  return (
    <div>{ personList }</div>
  )
}

export default NameList