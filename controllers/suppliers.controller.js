import suppliersService from '../services/suppliers.service.js'

async function createSupplier(req, res, next){
  try{
    let supplier = req.body
    if(!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address){
      throw new Error('Please fill name, CNPJ, phone, email and address.')
    }
    supplier = await suppliersService.createSupplier(supplier)
    res.send(supplier)
    logger.info(`POST /supplier - ${JSON.stringify(supplier)}`)
  }catch(err){
    next(err)
  }
}

async function getSuppliers(req, res, next){
  try{
    res.send(await suppliersService.getSuppliers())
    logger.info(`GET /suppliers`)
  }catch(err){
    next(err)
  }
}

async function getSupplier(req, res, next){
  const id = req.params.id
  try{
    const supplier = await suppliersService.getSupplier(id)
    res.send(supplier)
    logger.info(`GET /supplier - ${JSON.stringify(supplier)}`)
  }catch(err){
    next(err)
  }
}

async function deleteSupplier(req, res, next){
  const id = req.params.id
  try{
    res.send(await suppliersService.deleteSupplier(id))
    logger.info(`DELETE /supplier - ${JSON.stringify(id)}`)
  }catch(err){
    next(err)
  }
}

async function updateSupplier(req, res, next){
  try{
    let supplier = req.body
    if(!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address || !supplier.supplierId){
      throw new Error('Please fill name, CNPJ, phone, email, address, and supplier ID.')
    }
    supplier = await suppliersService.updateSupplier(supplier)
    res.send(supplier)
    logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`)
  }catch(err){
    next(err)
  }
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
}