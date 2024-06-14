import { useState } from 'react'
import { CurveInterpolator } from 'curve-interpolator'

export default function useBackgroundCalculations() {
  const [hue, setHue] = useState(208)
  const [saturation, setSaturation] = useState(40)
  const [lightness, setLightness] = useState(70)
  const [alpha, setAlpha] = useState(50)

  function calculateHue(sliderValue: number) {
    // x = sliderValue, y = hueValue
    type Point = [number, number]

    const points: Point[] = [
      [0, 214],
      [10000, 208],
    ]
    const t = sliderValue / 10000
    const lerp = new CurveInterpolator(points, { tension: 0, alpha: 0.5 })

    return setHue(lerp.getPointAt(t)[1])
  }

  function calculateSaturation(sliderValue: number) {
    // x = sliderValue, y = saturationValue
    type Point = [number, number]

    const points: Point[] = [
      [0, 0],
      [3300, 33],
      [5500, 99],
      [10000, 100],
    ]
    const t = sliderValue / 10000
    const lerp = new CurveInterpolator(points, { tension: 0, alpha: 0.5 })

    return setSaturation(lerp.getPointAt(t)[1])
  }

  function calculateLightness(sliderValue: number) {
    // x = sliderValue, y = lightnessValue
    type Point = [number, number]

    const points: Point[] = [
      [0, 0],
      [2200, 55],
      [4400, 85],
      [6600, 66],
      [10000, 50],
    ]
    const t = sliderValue / 10000
    const lerp = new CurveInterpolator(points, { tension: 0, alpha: 0.5 })

    return setLightness(lerp.getPointAt(t)[1])
  }

  function calculateAlpha(sliderValue: number) {
    // x = sliderValue, y = alphaValue
    type Point = [number, number]

    const points: Point[] = [
      [0, 100],
      [10000, 100],
    ]
    const t = sliderValue / 10000
    const lerp = new CurveInterpolator(points, { tension: 0, alpha: 0.5 })

    return setAlpha(lerp.getPointAt(t)[1])
  }

  function setBackgroundColor(sliderValue: number) {
    calculateHue(sliderValue)
    calculateSaturation(sliderValue)
    calculateLightness(sliderValue)
    calculateAlpha(sliderValue)
    return {
      sky: { hue, saturation, lightness, alpha },
    }
  }

  return {
    set: setBackgroundColor,
  }
}
