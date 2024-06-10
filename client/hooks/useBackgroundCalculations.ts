import { useState } from "react";
import { CurveInterpolator } from "curve-interpolator";

export default function useBackgroundCalculations() {
  const [hue, setHue] = useState(208)
  const [saturation, setSaturation] = useState(40)
  const [lightness, setLightness] = useState(70)
  const [alpha, setAlpha] = useState(50)

  function calculateHue(sliderValue: number) {
    // x = sliderValue, y = lightnessValue
    type Point = [number, number]

    const points: Point[] = [
      [0, 208],
      [10000, 218]
    ]
    const t = (sliderValue / 10000)
    const lerp = new CurveInterpolator(points, { tension: 0, alpha: 0.5})

    return setHue(lerp.getPointAt(t)[1])
  }

  function calculateSaturation(sliderValue: number) {
      // x = sliderValue, y = lightnessValue
    type Point = [number, number]

    const points: Point[] = [
      [0, 0],
      [4000, 65],
      [10000, 85]
    ]
    const t = (sliderValue / 10000)
    const lerp = new CurveInterpolator(points, { tension: 0, alpha: 0.5})

    return setSaturation(lerp.getPointAt(t)[1])
  }

  function calculateLightness(sliderValue: number) {
      // x = sliderValue, y = lightnessValue
    type Point = [number, number]

    const points: Point[] = [
      [0, 0],
      [2000, 95],
      [4000, 85],
      [6000, 70],
      [10000, 55]
    ]
    const t = (sliderValue / 10000)
    const lerp = new CurveInterpolator(points, { tension: 0, alpha: 0.5})

    return setLightness(lerp.getPointAt(t)[1])
  }

  function calculateAlpha(sliderValue: number) {
      // x = sliderValue, y = lightnessValue
    type Point = [number, number]

    const points: Point[] = [
      [0, 80],
      [10000, 100]
    ]
    const t = (sliderValue / 10000)
    const lerp = new CurveInterpolator(points, { tension: 0, alpha: 0.5})

    return setAlpha(lerp.getPointAt(t)[1])
  }

  function setBackgroundColor(sliderValue: number) {
    calculateHue(sliderValue)
    calculateSaturation(sliderValue)
    calculateLightness(sliderValue)
    calculateAlpha(sliderValue)

    console.log(`hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha}%)`)

    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha}%)`
  }

  return {
    hue: calculateHue,
    saturation: calculateSaturation,
    lightness: calculateLightness,
    alpha: calculateAlpha,
    set: setBackgroundColor
  }

}