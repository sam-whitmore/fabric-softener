import { useState, useEffect } from "react"
import useBackgroundCalculations from "../hooks/useBackgroundCalculations"

export default function Survey() {
  const [sliderValue, setSliderValue] = useState(5000)
  // const [bg, setBg] = useState('white')

  function handleSliderChange(e) {
    setSliderValue(e.target.value)
  }

  const calculations = useBackgroundCalculations()

  useEffect(() => {
    calculations.lightness(sliderValue)
  }, [calculations, sliderValue])
  

  return (
    <div>
      <p>How are you?</p>
      <input type="range" min="1" value={sliderValue} max="9999" className="slider" onChange={handleSliderChange}></input>
      <button></button>
    </div>
  )
}