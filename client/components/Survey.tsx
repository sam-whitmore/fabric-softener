import { useState, useEffect } from "react"
import useBackgroundCalculations from "../hooks/useBackgroundCalculations"

export default function Survey() {
  const [sliderValue, setSliderValue] = useState(5000)

  function handleSliderChange(e) {
    setSliderValue(e.target.value)
  }

  const background = useBackgroundCalculations()

  useEffect(() => {
    document.body.style.backgroundColor = background.set(sliderValue)
  }, [background, sliderValue])

  return (
    <div>
      <p>How are you?</p>
      <input type="range" min="1" value={sliderValue} max="9999" className="slider" onChange={handleSliderChange}></input>
      <button></button>
    </div>
  )
}