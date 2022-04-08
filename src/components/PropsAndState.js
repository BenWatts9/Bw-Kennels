import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(10)
  let [displayMessage, setMessage] = useState(``)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    if(countClicks > 0){
      const newCountClicks = --countClicks
      setCountClicks(newCountClicks)
    }
    if(countClicks === 0) {
      const newDisplayMessage = `You have reached zero and are no longer permitted to click. Thank You. 
      -MGMT of the Animal Daycare`
      setMessage(newDisplayMessage)
    }
  }

  const [checkedState, setCheckedState] = useState(true)

  const handleChange = () => {
    setCheckedState(!checkedState)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{displayMessage}</p>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button><br></br>
      <label><input type="checkbox" onChange={handleChange} />Check Me</label>
    </>
  )
}