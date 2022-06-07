import mongodb from 'mongodb'
import "dotenv/config"

function getClient(){
  const uri = process.env.URI
  return new mongodb.MongoClient(uri)
}

export {
  getClient
}