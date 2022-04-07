import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  const [checkedState, setCheckedState] = useState(true)

  const handleChange = () => {
    setCheckedState(!checkedState)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button><br></br>
      <label><input type="checkbox" onChange={handleChange} />Check Me</label>
    </>
  )
}