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
    const { sky } = calculateBackground(quant)
    document.body.style.setProperty(
      '--bg-gradient-sky-start',
      `hsla(${sky.hue} ${sky.saturation}% ${sky.lightness}% / ${sky.alpha})`,
    )
    document.body.style.setProperty(
      '--bg-gradient-sky-horizon',
      `hsla(${sky.hue} ${sky.saturation}% ${sky.lightness}% / ${sky.alpha})`,
    )
    document.body.style.setProperty(
      '--horizon-height',
      `${(quant / 100).toFixed(0)}%`,
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
