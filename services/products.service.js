import productsRepository from '../repositories/products.repository.js'
import suppliersRepository from '../repositories/suppliers.repository.js'
import salesRepository from '../repositories/sales.repository.js'
import productsinfoRepository from '../repositories/productsinfo.repository.js'

async function createProduct(product){
  const supplier = await suppliersRepository.getSupplier(product.supplierId)
  if(supplier!=null){
    return await productsRepository.insertProduct(product)
  }
  throw new Error('Suppliers not found.')
}

async function getProducts(){
  return await productsRepository.getProducts()
}

async function getProduct(id){
  const product = await productsRepository.getProduct(id)
  product.info = await productsinfoRepository.getProductInfo(parseInt(id))
  return product
}

async function deleteProduct(id){
  const sales = await salesRepository.getSalesByProductId(id)
  if(sales.length>0){
    throw new Error("Can't delete a product from an existent sale")
  }
  return await productsRepository.deleteProduct(id)
}

async function updateProduct(product){
  const supplier = await suppliersRepository.getSupplier(product.supplierId)
  if(supplier!=null){
    return await productsRepository.updateProduct(product)
  }
  throw new Error('Suppliers not found.')
}

async function createProductInfo(productInfo){
  return await productsinfoRepository.createProductInfo(productInfo)
}

async function updateProductInfo(productInfo){
  return await productsinfoRepository.updateProductInfo(productInfo)
}

async function createReview(review, productId){
  await productsinfoRepository.createReview(review, productId)
}

async function deleteReview(productId, index){
  await productsinfoRepository.deleteReview(parseInt(productId), parseInt(index))
}

async function getProductsInfo(){
  return await productsinfoRepository.getProductsInfo()
}

async function deleteProductInfo(productId){
  return await productsinfoRepository.deleteProductInfo(parseInt(productId))
}

export default{
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductInfo,
  updateProductInfo,
  createReview,
  deleteReview,
  deleteProductInfo,
  getProductsInfo
}