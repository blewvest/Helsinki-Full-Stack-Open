import { useState } from "react";

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
        <Button onClick={handleGoodClick} text='good'></Button>
        <Button onClick={handleNeutralClick} text='neutral'></Button>
        <Button onClick={handleBadClick} text='bad'></Button>
      <h1>statistics</h1>
      <ul>
        <li>good: {good}</li>
        <li>neutal: {neutral}</li>
        <li>bad: {bad}</li>
      </ul>
    </div>
  )
}

export default App;
