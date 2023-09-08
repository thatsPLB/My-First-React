import { useState } from 'react'
import './App.css'
import todo from './todo'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <todo task="learn react" isDone={true}></todo>
      <todo task="Explore core concepts"isdone={false}></todo>
      <todo task="try jsx" isdone={false}></todo>
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Developer></Developer> 
      */}
    </>
  )
}
function Device (props){
  // console.log(props);
  return <h2>This Device: {props.name} price: {props.price}</h2>
}
function Person(){
  const age = 25;
  const money = 20;
  const person = {name : 'salman',age:100} 
  return <h3>I am a {person.name} with age: {age + money}</h3>
}
const {grade, score} = {grade: '7', score: '99'};
function Student ({grade, score}){
  console.log(grade,score);
  return <div className='student'>
    <h3>This is a Student</h3>
    <p>Class: {grade}</p>
    <p>Score:{score}</p>
  </div>
}
function Developer(){
  const developerStyle = {
    margin:  '20px',
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
