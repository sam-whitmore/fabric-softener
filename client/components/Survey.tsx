import { useNavigate } from 'react-router-dom'
import useResponses from '../hooks/useResponses'
import useLocation from '../hooks/useLocation'
import { useQuant } from './App'
import { useState } from 'react' // useEffect, useRef

export default function Survey() {
  // const myRef = useRef(null);
  const [quant, setQuant] = useQuant()
  const [qual, setQual] = useState('')

  const navigate = useNavigate()

  // useEffect(() => {
  //   const handleScroll = (event: WheelEvent) => {
  //     console.log(event.deltaY);
  //     setQuant(quant + event.deltaY)
  //   };
  //   const element = myRef.current;
  //   element.addEventListener('wheel', handleScroll);
  //   return () => {
  //     element.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuant(parseInt(e.target.value))
  }

  const response = useResponses()
  const location = useLocation()
  const {
    data: weather,
    isPending,
    isError,
    error,
  } = location.weather(-37.670538, 176.227698)
  if (isPending) return <p>Loading Weather Data...</p>
  if (isError) return <p>Error: {error.message}</p>

  function handleSubmit(sliderValue: number) {
    if (isPending) return console.log('fetching weather data...')
    if (isError) return console.error(error.message)

    response.add({
      quant: sliderValue,
      qual: qual,
      datetime: new Date().toJSON(),
      is_day: weather.current.is_day,
      latitude: -37.60538,
      longitude: 176.227698,
      climate: weather.current.condition.text,
      temp_C: weather.current.temp_c,
      uv_index: weather.current.uv,
      humidity_percent: weather.current.humidity,
      cloud_cover_percent: weather.current.cloud,
      wind_kph: weather.current.wind_kph,
      wind_dir: weather.current.wind_dir,
      precip_mm: weather.current.precip_mm,
    })

    navigate('/home')
  }
  // ref={myRef} 
  return (
    <div className="relative h-screen w-screen text-center"> 
      <p className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 text-center text-8xl text-white">
        How are you?
      </p>
      <input
        type="range"
        min="1"
        value={quant}
        max="10000"
        className="slider mx-auto w-4/5"
        onChange={handleSliderChange}
      ></input>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-between rounded-full bg-slate-50 text-6xl font-extralight text-white shadow-md">
        <input
          id="qual-summary"
          name="qual"
          type="text"
          value={qual}
          className="m-2 mr-0 w-auto rounded-full bg-slate-50 text-center"
          onChange={(e) => setQual(e.target.value)}
        ></input>
        <button
          id="quant-summary"
          className="m-2 h-24 w-24 rounded-full hover:border-2"
          onClick={() => handleSubmit(quant)}
        >
          {(quant / 1000).toFixed(0)}
        </button>
      </div>
    </div>
  )
}
