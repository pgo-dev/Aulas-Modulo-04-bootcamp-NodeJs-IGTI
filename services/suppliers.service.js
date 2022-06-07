import suppliersRepository from '../repositories/suppliers.repository.js'

async function createSupplier(supplier){
  return await suppliersRepository.insertSupplier(supplier)
}

async function getSuppliers(){
  return await suppliersRepository.getSuppliers()
}

async function getSupplier(id){
  return await suppliersRepository.getSupplier(id)
}

async function deleteSupplier(id){
  return await suppliersRepository.deleteSupplier(id)
}

async function updateSupplier(supplier){
  return await suppliersRepository.updateSupplier(supplier)
}

export default{
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
}