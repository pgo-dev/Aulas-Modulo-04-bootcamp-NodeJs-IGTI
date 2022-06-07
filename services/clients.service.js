import clientsRepository from '../repositories/clients.repository.js'

async function createClient(client){
  return await clientsRepository.insertClient(client)
}

async function getClients(){
  return await clientsRepository.getClients()
}

async function getClient(id){
  return await clientsRepository.getClient(id)
}

async function deleteClient(id){
  return await clientsRepository.deleteClient(id)
}

async function updateClient(client){
  return await clientsRepository.updateClient(client)
}

export default{
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
}