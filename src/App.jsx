import { useState } from 'react'
import './App.css'
import todo from './todo'
import Actor  from './Actor';
import singer from './singer';

function App() {
  const actors = ['Sakib','Raj']
  const singers = [
    { id:1, name: 'dr.habi jabi',age: 45},
    {id:2, name: 'habi jabi',age: 55},
    {id:3, name: 'drp.habi jabi',age: 65},
  ]
  return (
    <>
      <h1>Vite + React</h1>
      {
        singers.map(singer => <singer singer={singer}></singer>)
      }
      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor =><Actor name={actor }></Actor> )
      }
      {/* <todo task="learn react" isDone={true}></todo>
      <todo task="Explore core concepts"isdone={false}></todo>
      <todo task="try jsx" isdone={false}></todo> */}
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
