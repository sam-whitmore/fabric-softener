import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useBackgroundCalculations from '../hooks/useBackgroundCalculations'
import useResponses from '../hooks/useResponses'
import useLocation from '../hooks/useLocation'

export default function Survey() {
  const [sliderValue, setSliderValue] = useState(5000)

  const navigate = useNavigate()
  const background = useBackgroundCalculations()

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSliderValue(parseInt(e.target.value))
  }

  useEffect(() => {
    document.body.style.backgroundColor = background.set(sliderValue)
  }, [background, sliderValue])

  
  const response = useResponses()
  const location = useLocation()
  const {
    data: weather,
    isPending,
    isError,
    error,
  } = location.weather(-37.670538, 176.227698)
  if (isPending) return console.log('fetching weather data...')
  if (isError) return console.error(error.message)

  function handleSubmit(sliderValue: number) {
    if (isPending) return console.log('fetching weather data...')
    if (isError) return console.error(error.message)

    response.add({
      quant: sliderValue,
      datetime: new Date().toJSON(),
      latitude: -37.60538,
      longitude: 176.227698,
      climate: weather.current.condition.text,
      temp_C: weather.current.temp_c,
    })

    navigate('/home')
  }

  return (
    <div className="h-screen w-screen text-center">
      <p className="text-center text-3xl text-white">How are you?</p>
      <input
        type="range"
        min="1"
        value={sliderValue}
        max="10000"
        className="slider mx-auto w-4/5"
        onChange={handleSliderChange}
      ></input>
      <button
        className="text-center text-3xl text-white"
        onClick={() => handleSubmit(sliderValue)}
      >
        {(sliderValue / 1000).toFixed(1)}
      </button>
    </div>
  )
}
