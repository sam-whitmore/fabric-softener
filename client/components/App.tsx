import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useBackgroundCalculations from '../hooks/useBackgroundCalculations'

export type QuantContextType = {
  quant: number
  setQuant: (n: number) => { quant: number }
}

export default function App() {
  const [quant, setQuant] = useState(5000)
  const [sky, setSky] = useState({
    hue: 210,
    saturation: 65,
    lightness: 75,
    alpha: 100,
  }) // I would rather not set these with default values, if possible!
  const background = useBackgroundCalculations()

  useEffect(() => {
    const { sky: calculatedSky } = background.set(quant)
    console.trace('Background.set called') // TODO: background.set(quant) is calling itself recursively
    if (calculatedSky !== sky) {
      setSky(calculatedSky)
      console.log(sky) // sky *is* updating based on the slider's value, being passed through <Outlet>'s context prop!
    }
  }, [background, quant, sky])

  return (
    <div className="app">
      <div
        className={`bg-gradient-to-t from-hsl({${sky.hue} ${sky.saturation} ${sky.lightness}}) 50%, to-blue`}
      >
        {/* this bg-gradient is not functioning; not on the initial load or any others. */}
        <Outlet context={[quant, setQuant]} />
      </div>
    </div>
  )
}
