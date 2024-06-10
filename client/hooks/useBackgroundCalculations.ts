import { useState } from "react";
import { CurveInterpolator } from "curve-interpolator";

export default function useBackgroundCalculations() {
  // const [hue, setHue] = useState(208)
  // const [saturation, setSaturation] = useState(40)
  const [lightness, setLightness] = useState(70)
  // const [alpha, setAlpha] = useState(50)

  // function calculateHue(sliderValue: number) {
    
  // }

  // function calculateSaturation(sliderValue: number) {

  // }

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

    setLightness(lerp.getPointAt(t)[1])
    console.log(sliderValue)
    console.log(lightness)
  }

  // function calculateAlpha(sliderValue: number) {

  // }



  // function setBackgroundColor(sliderValue: number) {
  //   calculateHue(sliderValue)
  //   calculateSaturation(sliderValue)
  //   calculateLightness(sliderValue)
  //   calculateAlpha(sliderValue)

  //   return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha}%)`
  // }

  return {
    lightness: calculateLightness
  }

}