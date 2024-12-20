import './greeting.css'
import React from 'react'

interface IGreeting {
    name: string
    age: number
    skills: string[]
}

const Greeting: React.FC<IGreeting> = ({name, age, skills}) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            <h2>You are {age} years old</h2>
            <div className='skills'>
                <h2>Your skills are:</h2> 
                {skills.map((skills, index) => <h4 key={index}>{index + 1}. {skills}</h4>)}
            </div>
        </div>
    )
}

export default Greeting