import clientsRepository from '../repositories/clients.repository.js'
import salesRepository from '../repositories/sales.repository.js'
import productsRepository from '../repositories/products.repository.js'

async function createSale(sale){
  const errors = []
  const client = await clientsRepository.getClient(sale.clientId)
  let product = await productsRepository.getProduct(sale.productId)
  if(client==null){
    errors.push('Cliente não encontrado')
  }
  if(product==null){
    errors.push('Produto não encontrado')
  }
  if(errors.length>0){
    throw new Error(errors)
  }
  if(product.stock>0){
    product.stock--
    console.log(product)
    await productsRepository.updateProduct(product)
    return await salesRepository.insertSale(sale)
  }else{
    throw new Error('O produto informado não possui estoque')
  }
}

async function getSales(productId, supplierId){
  if(productId){
    return await salesRepository.getSalesByProductId(productId)
  }
  if(supplierId){
    return await salesRepository.getSalesBySupplierId(supplierId)
  }
  return await salesRepository.getSales()
}

async function getSale(id){
  return await salesRepository.getSale(id)
}

async function deleteSale(id){
  const sale = await salesRepository.getSale(id)
  if(sale==null){
    throw new Error('Id not found')
  }
  let product = await productsRepository.getProduct(sale.productId)
  product.stock++
  await productsRepository.updateProduct(product.dataValues)
  return await salesRepository.deleteSale(id)
}

async function updateSale(sale){
  let errors = []
  const client = await clientsRepository.getClient(sale.clientId)
  const product = await productsRepository.getProduct(sale.productId)
  if(client.message){
    errors.push('Cliente não encontrado')
  }
  if(product.message){
    errors.push('Produto não encontrado')
  }
  if(errors.length>0){
    throw new Error(errors)
  }
  return await salesRepository.updateSale(sale)
}

export default{
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
}