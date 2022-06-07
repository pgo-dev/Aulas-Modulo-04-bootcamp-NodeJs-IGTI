import salesService from '../services/sales.service.js'

async function createSale(req, res, next){
  try{
    let sale = req.body
    if(!sale.value || !sale.date || !sale.clientId || !sale.productId){
      throw new Error('Please fill value, date, client_id and product_id')
    }
    sale = await salesService.createSale(sale)
    res.send(sale)
    logger.info(`POST /sale - ${JSON.stringify(sale)}`)
  }catch(err){
    next(err)
  }
}

async function getSales(req, res, next){
  try{
    const productId = req.query.productId
    const supplierId = req.query.supplierId
    res.send(await salesService.getSales(productId, supplierId))
    logger.info(`GET /sales`)
  }catch(err){
    next(err)
  }
}

async function getSale(req, res, next){
  const id = req.params.id
  try{
    const sale = await salesService.getSale(id)
    res.send(sale)
    logger.info(`GET /sale - ${JSON.stringify(sale)}`)
  }catch(err){
    next(err)
  }
}

async function deleteSale(req, res, next){
  const id = req.params.id
  try{
    res.send(await salesService.deleteSale(id))
    logger.info(`DELETE /sale - ${JSON.stringify(id)}`)
  }catch(err){
    next(err)
  }
}

async function updateSale(req, res, next){
  try{
    let sale = req.body
    if(!sale.value || !sale.date || !sale.clientId || !sale.productId || !sale.saleId){
      throw new Error('Please fill value, date, client_id, product_id and sale_id')
    }
    sale = await salesService.updateSale(sale)
    res.send(sale)
    logger.info(`PUT /sale - ${JSON.stringify(sale)}`)
  }catch(err){
    next(err)
  }
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
}