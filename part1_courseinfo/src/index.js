import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14




const Total = () => {

    return (
        <div>
             <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )

}

const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
    let sum = a => a.reduce((x,y) => x+y);
    let total = sum(course.parts.map(x => Number(x.exercises)));
  
    return (
      <div>
<h1>{course.name}</h1>
{course.parts.map(part => (
      
      <p>{part.name} {part.exercises}</p>
    
          
      ))}

      
<p>Number of exercises {total}</p>
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))
