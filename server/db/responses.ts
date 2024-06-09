import connection from './connection.ts'
import { ResponseData } from '../../models/responses.ts'

const db = connection

export async function getAllResponses() {
  return db('responses').select()
}

export async function getAllUserResponses(sub: string) {
  return db('responses').where({user_auth0_sub: sub})
}

export async function addResponse(response: ResponseData) {
  return db('responses').insert(response)
}

export async function deleteResponse(id: number) {
  return db('responses').where({id}).del()
}