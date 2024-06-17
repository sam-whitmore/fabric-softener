import { CurveInterpolator } from 'curve-interpolator'

const skyTopHueCurve = new CurveInterpolator(
  [
    [0, 204],
    [5000, 210],
    [10000, 214],
  ],
  { tension: 0, alpha: 0.5 },
)

const skyTopSaturationCurve = new CurveInterpolator(
  [
    [0, 0],
    [1100, 1],
    [2200, 10],
    [3300, 60],
    [5000, 100],
    [10000, 100],
  ],
  { tension: 0, alpha: 0.5 },
)

const skyTopLightnessCurve = new CurveInterpolator(
  [
    [0, 0],
    [1100, 11],
    [2200, 35],
    [3500, 85],
    [5000, 80],
    [7500, 65],
    [10000, 50],
  ],
  { tension: 0, alpha: 0.5 },
)

const skyTopAlphaCurve = new CurveInterpolator(
  [
    [0, 100],
    [10000, 100],
  ],
  { tension: 0, alpha: 0.5 },
)

const skyHorizonHueCurve = new CurveInterpolator(
  [
    [0, 206],
    [5000, 208],
    [10000, 212],
  ],
  { tension: 0, alpha: 0.5 },
)

const skyHorizonSaturationCurve = new CurveInterpolator(
  [
    [0, 0],
    [2200, 25],
    [3300, 55],
    [5000, 85],
    [7500, 95],
    [10000, 100],
  ],
  { tension: 0, alpha: 0.5 },
)

const skyHorizonLightnessCurve = new CurveInterpolator(
  [
    [0, 0],
    [2200, 65],
    [3800, 96],
    [5000, 94],
    [7500, 80],
    [10000, 70],
  ],
  { tension: 0, alpha: 0.5 },
)

const skyHorizonAlphaCurve = new CurveInterpolator(
  [
    [0, 100],
    [10000, 100],
  ],
  { tension: 0, alpha: 0.5 },
)

const groundHorizonHueCurve = new CurveInterpolator(
  [
    [0, 150],
    [5000, 130],
    [10000, 140],
  ],
  { tension: 0, alpha: 0.5 },
)

const groundHorizonSaturationCurve = new CurveInterpolator(
  [
    [0, 0],
    [2200, 15],
    [3300, 33],
    [5000, 44],
    [7500, 50],
    [10000, 50],
  ],
  { tension: 0, alpha: 0.5 },
)

const groundHorizonLightnessCurve = new CurveInterpolator(
  [
    [0, 0],
    [2200, 50],
    [4000, 80],
    [7500, 65],
    [10000, 50],
  ],
  { tension: 0, alpha: 0.5 },
)

const groundHorizonAlphaCurve = new CurveInterpolator(
  [
    [0, 100],
    [10000, 100],
  ],
  { tension: 0, alpha: 0.5 },
)

const groundEndHueCurve = new CurveInterpolator(
  [
    [0, 160],
    [5000, 130],
    [10000, 115],
  ],
  { tension: 0, alpha: 0.5 },
)

const groundEndSaturationCurve = new CurveInterpolator(
  [
    [0, 0],
    [2200, 33],
    [5000, 40],
    [7500, 44],
    [10000, 48],
  ],
  { tension: 0, alpha: 0.5 },
)

const groundEndLightnessCurve = new CurveInterpolator(
  [
    [0, 0],
    [1100, 15],
    [2500, 33],
    [4000, 56],
    [5000, 54],
    [7500, 52],
    [10000, 50],
  ],
  { tension: 0, alpha: 0.5 },
)

const groundEndAlphaCurve = new CurveInterpolator(
  [
    [0, 100],
    [10000, 100],
  ],
  { tension: 0, alpha: 0.5 },
)

function backgroundColor(t: number) {
  const skyTopHue = skyTopHueCurve.getPointAt(t)[1]
  const skyTopSaturation = skyTopSaturationCurve.getPointAt(t)[1]
  const skyTopLightness = skyTopLightnessCurve.getPointAt(t)[1]
  const skyTopAlpha = skyTopAlphaCurve.getPointAt(t)[1]

  const skyHorizonHue = skyHorizonHueCurve.getPointAt(t)[1]
  const skyHorizonSaturation = skyHorizonSaturationCurve.getPointAt(t)[1]
  const skyHorizonLightness = skyHorizonLightnessCurve.getPointAt(t)[1]
  const skyHorizonAlpha = skyHorizonAlphaCurve.getPointAt(t)[1]

  const groundHorizonHue = groundHorizonHueCurve.getPointAt(t)[1]
  const groundHorizonSaturation = groundHorizonSaturationCurve.getPointAt(t)[1]
  const groundHorizonLightness = groundHorizonLightnessCurve.getPointAt(t)[1]
  const groundHorizonAlpha = groundHorizonAlphaCurve.getPointAt(t)[1]

  const groundEndHue = groundEndHueCurve.getPointAt(t)[1]
  const groundEndSaturation = groundEndSaturationCurve.getPointAt(t)[1]
  const groundEndLightness = groundEndLightnessCurve.getPointAt(t)[1]
  const groundEndAlpha = groundEndAlphaCurve.getPointAt(t)[1]

  return {
    sky: {
      top: {
        hue: skyTopHue,
        saturation: skyTopSaturation,
        lightness: skyTopLightness,
        alpha: skyTopAlpha,
      },
      horizon: {
        hue: skyHorizonHue,
        saturation: skyHorizonSaturation,
        lightness: skyHorizonLightness,
        alpha: skyHorizonAlpha,
      },
    },
    ground: {
      horizon: {
        hue: groundHorizonHue,
        saturation: groundHorizonSaturation,
        lightness: groundHorizonLightness,
        alpha: groundHorizonAlpha,
      },
      end: {
        hue: groundEndHue,
        saturation: groundEndSaturation,
        lightness: groundEndLightness,
        alpha: groundEndAlpha,
      },
    },
  }
}

export default function calculateBackground(quant: number) {
  return backgroundColor(quant / 10_000)
}
