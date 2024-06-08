import { Router } from 'express'
import * as db from '../db/responses.ts'
// import checkJwt, { JwtRequest } from '../auth0.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.getAllResponses()
    res.json(result)
  } catch (error) { 
    console.error(`Error: ${error}`) 
    res.sendStatus(500).json({ error: "Server-side Routing Failure"})
  }
})

export default router