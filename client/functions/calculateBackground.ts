import { CurveInterpolator } from 'curve-interpolator'

const hueCurve = new CurveInterpolator(
  [
    [0, 214],
    [10000, 208],
  ],
  { tension: 0, alpha: 0.5 },
)

const saturationCurve = new CurveInterpolator(
  [
    [0, 0],
    [3300, 33],
    [5500, 99],
    [10000, 100],
  ],
  { tension: 0, alpha: 0.5 },
)

const lightnessCurve = new CurveInterpolator(
  [
    [0, 0],
    [2200, 55],
    [4400, 85],
    [6600, 66],
    [10000, 50],
  ],
  { tension: 0, alpha: 0.5 },
)

const alphaCurve = new CurveInterpolator(
  [
    [0, 100],
    [10000, 100],
  ],
  { tension: 0, alpha: 0.5 },
)

function backgroundColor(t: number) {
  const hue = hueCurve.getPointAt(t)[1]
  const saturation = saturationCurve.getPointAt(t)[1]
  const lightness = lightnessCurve.getPointAt(t)[1]
  const alpha = alphaCurve.getPointAt(t)[1]

  return {
    sky: {
      hue,
      saturation,
      lightness,
      alpha,
    },
    ground: {},
  }
}

export default function calculateBackground(quant: number) {
  return backgroundColor(quant / 10_000)
}
