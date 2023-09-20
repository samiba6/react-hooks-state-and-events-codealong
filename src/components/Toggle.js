import React from "react"
import {useState} from "react"

function Toggle () {
  const [isOn, setIsOn] = useState(false)
  const handleClick = () => {

    setIsOn(isOn => !isOn)
  }

  return <button onClick={handleClick}>{isOn && "On" || "Off"}</button>
}

export default Toggle