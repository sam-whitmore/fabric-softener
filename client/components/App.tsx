import { Outlet, useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'
import calculateBackground from '../functions/calculateBackground'

type QuantContextType = [
  quant: number,
  setQuant: (n: number) => { quant: number },
]

export function useQuant() {
  return useOutletContext() as QuantContextType
}

export default function App() {
  const [quant, setQuant] = useState(5000)

  useEffect(() => {
    const { sky, ground } = calculateBackground(quant)
    document.body.style.setProperty(
      '--bg-gradient-sky-start',
      `hsl(${sky.top.hue} ${sky.top.saturation}% ${sky.top.lightness}%)`,
    )
    document.body.style.setProperty(
      '--bg-gradient-sky-horizon',
      `hsl(${sky.horizon.hue} ${sky.horizon.saturation}% ${sky.horizon.lightness}%)`,
    )
    document.body.style.setProperty('--sky-horizon-height', `${quant / 100}%`)
    document.body.style.setProperty(
      '--ground-horizon-height',
      `${quant / 100}%`,
    )
    document.body.style.setProperty(
      '--bg-gradient-ground-horizon',
      `hsl(${ground.horizon.hue} ${ground.horizon.saturation}% ${ground.horizon.lightness}%)`,
    )
    document.body.style.setProperty(
      '--bg-gradient-ground-end',
      `hsl(${ground.end.hue} ${ground.end.saturation}% ${ground.end.lightness}%)`,
    )
    document.body.style.setProperty(
      '--circle-color',
      `hsl(${sky.top.hue} ${sky.top.saturation}% ${sky.top.lightness}%)`
    )
  }, [quant])

  return (
    <>
      <div className="app w-screen, h-screen">
        <Outlet context={[quant, setQuant]} />
      </div>
    </>
  )
}
