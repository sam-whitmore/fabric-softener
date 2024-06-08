import connection from './connection.ts'

const db = connection

export async function getAllResponses() {
  return db('responses').select()
}