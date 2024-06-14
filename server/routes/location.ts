import { Router } from 'express'
import request from 'superagent'

const router = Router()

const BEARER_ACCESS_TOKEN = process.env.WEATHER_API_KEY
const WEATHER_API_BASE = 'http://api.weatherapi.com/v1/current.json'

router.get('/weather', async (req, res, next) => {
  const { latitude, longitude } = req.query
  console.log(latitude)
  try {
    const apiResponse = await request
      .get(WEATHER_API_BASE)
      .query({
        key: BEARER_ACCESS_TOKEN,
        q: `${latitude},${longitude}`,
        aqi: 'yes',
      })
    res.json(apiResponse.body)
  } catch (error) {
    next(error)
  }
})

export default router
