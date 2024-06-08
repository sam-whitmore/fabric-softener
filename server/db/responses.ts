import connection from './connection.ts'

const db = connection

export async function getAllResponses() {
  return db('responses').select()
}

export async function getAllResponsesByUser(sub: string) {
  return db('responses').where({user_auth0_sub: sub})
}