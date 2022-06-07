import clientsService from '../services/clients.service.js'

async function createClient(req, res, next){
  try{
    let client = req.body
    if(!client.name || !client.cpf || !client.phone || !client.email || !client.address){
      throw new Error('Please fill name, CPF, phone, email and address.')
    }
    client = await clientsService.createClient(client)
    res.send(client)
    logger.info(`POST /client - ${JSON.stringify(client)}`)
  }catch(err){
    next(err)
  }
}

async function getClients(req, res, next){
  try{
    res.send(await clientsService.getClients())
    logger.info(`GET /clients`)
  }catch(err){
    next(err)
  }
}

async function getClient(req, res, next){
  const id = req.params.id
  try{
    const client = await clientsService.getClient(id)
    res.send(client)
    logger.info(`GET /client - ${JSON.stringify(client)}`)
  }catch(err){
    next(err)
  }
}

async function deleteClient(req, res, next){
  const id = req.params.id
  try{
    res.send(await clientsService.deleteClient(id))
    logger.info(`DELETE /client - ${JSON.stringify(id)}`)
  }catch(err){
    next(err)
  }
}

async function updateClient(req, res, next){
  try{
    let client = req.body
    if(!client.name || !client.cpf || !client.phone || !client.email || !client.address || !client.clientId){
      throw new Error('Please fill name, CPF, phone, email, address and client ID.')
    }
    client = await clientsService.updateClient(client)
    res.send(client)
    logger.info(`PUT /client - ${JSON.stringify(client)}`)
  }catch(err){
    next(err)
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
}