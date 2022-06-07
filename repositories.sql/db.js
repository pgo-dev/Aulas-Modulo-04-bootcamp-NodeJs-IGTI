import pg from 'pg'
import { promises as fs } from 'fs'

const url = JSON.parse(await fs.readFile('cs.json'))

async function connect(){
  if(global.connection){
    return global.connection.connect()
  }
  const pool = new pg.Pool({
    connectionString: url.url
  })
  global.connection = pool
  return pool.connect()
}

export {
  connect
}