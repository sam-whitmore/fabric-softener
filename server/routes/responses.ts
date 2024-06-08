import { Router } from 'express'
import * as db from '../db/responses.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'
// import checkJwt, { JwtRequest } from '../auth0.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.getAllResponses()
    res.json(result)
  } catch (error) { 
    console.error(`Error: ${error}`) 
    res.sendStatus(500).json({ error: "Server-side Routing Failed to Fetch"})
  }
})

router.get('/user/', checkJwt, async (req: JwtRequest, res) => {
  const sub = req.auth?.sub
  if (!sub) {
    res.sendStatus(401)
  }
  try {
    const result = await db.getAllResponsesByUser(sub as string)
    res.json(result)
  } catch (error) {
    console.error(`Error: ${error}`)
    res.sendStatus(500).json({error: "Server-side Routing Failed to Fetch"})
  }
})

export default router