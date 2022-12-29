// const Header = (props) => {
//   return (
//     <h1>{props.course.name}</h1>
//   )
// }

import { useState } from "react"

// const Part = (props) => {
//   return (
//     <div>
//       <p>
//         {props.course}: {props.exercises}
//       </p>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part course={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
//       <Part course={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
//       <Part course={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name:'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course}></Header>
//       <Content parts={course.parts}></Content>
//       <Total parts={course.parts}></Total>
//     </div>
//   )
  
//     // <div>
//     //   <h1>{course}</h1>
//     //   <p>
//     //     {part1} {exercises1}
//     //   </p>
//     //   <p>
//     //     {part2} {exercises2}
//     //   </p>
//     //   <p>
//     //     {part3} {exercises3}
//     //   </p>
//     //   <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     // </div>
// }

/*PART C*/
// import { useState } from "react"

// const Display = ({ counter }) => ( <div>{counter}</div> )

// const Button = ({ onClick, text }) => {<button onClick={onClick}>{text}</button> }

// const App = (props) => {
//   const [ counter, setCounter ] = useState(0)

//   // setInterval(
//   //   () => setCounter(counter + 1), 1000
//   // )

//   // console.log('rendering...', counter)

//   // const handleClick = () => {
//   //   console.log('clicked')
//   // }

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}></Display>
//       <Button onClick={increaseByOne} text='plus'></Button>
//       <Button onClick={setToZero} text='zero'></Button>
//       <Button onClick={decreaseByOne} text='minus'></Button>
//     </div>
//   )
// }

/* PART D */
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>the app is used by pressing the buttons</div>
    )
  }
  return (
    <div>
      button press history : {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => ( <button onClick={onClick}>{text}</button> )

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => { 
    setAll(allClicks.concat('L'))  
    setLeft(left + 1 )
  }

  const handleRightClick = () => { 
    setAll(allClicks.concat('R'))
    setRight(right + 1)
   }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' /> 
      <Button onClick={handleRightClick} text='left'/>
      {right}
      <History allClicks={allClicks}></History>
    </div>
  )
}

export default App