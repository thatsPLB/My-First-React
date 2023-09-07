import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
     
    </>
  )
}
function Person(){
  const age = 25;
  const money = 20;
  const person = {name : 'salman',age:100} 
  return <h3>I am a {person.name} with age: {age + money}</h3>
}
function Student (){
  return <div className='student'>
    <h3>This is a Student</h3>
    <p>Name:</p>
    <p>Age:</p>
  </div>
}
function Developer(){
  const developerStyle = {
    margin: : '20px',
    padding: '20px',
    border:'2px solid purple'
  }
  return(
    <div>
      <h5>Devo dev</h5>
      <p>Coding: </p>
    </div>
  )

}
export default App
