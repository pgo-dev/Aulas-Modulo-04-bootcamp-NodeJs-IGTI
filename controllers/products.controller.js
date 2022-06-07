import { MongoNotConnectedError } from 'mongodb'
import productsService from '../services/products.service.js'

async function createProduct(req, res, next){
  try{
    let product = req.body
    if(!product.name || !product.description || !product.value || !product.stock || !product.supplierId){
      throw new Error('Please fill name, description, value, stock and supplier_id.')
    }
    product = await productsService.createProduct(product)
    res.send(product)
    logger.info(`POST /product - ${JSON.stringify(product)}`)
  }catch(err){
    next(err)
  }
}

async function getProducts(req, res, next){
  try{
    res.send(await productsService.getProducts())
    logger.info(`GET /products`)
  }catch(err){
    next(err)
  }
}

async function getProduct(req, res, next){
  const id = req.params.id
  try{
    const product = await productsService.getProduct(id)
    res.send(product)
    logger.info(`GET /product - ${JSON.stringify(product)}`)
  }catch(err){
    next(err)
  }
}

async function deleteProduct(req, res, next){
  const id = req.params.id
  try{
    res.send(await productsService.deleteProduct(id))
    logger.info(`DELETE /product - ${JSON.stringify(id)}`)
  }catch(err){
    next(err)
  }
}

async function updateProduct(req, res, next){
  try{
    let product = req.body
    if(!product.name || !product.description || !product.value || !product.stock || !product.supplierId || !product.productId){
      throw new Error('Please fill name, description, value, stock, supplier_id, and product ID.')
    }
    product = await productsService.updateProduct(product)
    res.send(product)
    logger.info(`PUT /product - ${JSON.stringify(product)}`)
  }catch(err){
    next(err)
  }
}

async function createProductInfo(req, res, next){
  try{
    let productInfo = req.body
    if(!productInfo.productId){
      throw new Error('Inform product ID')
    }
    productInfo = await productsService.createProductInfo(productInfo)
    res.send(productInfo)
    logger.info(`POST /products/info - ${JSON.stringify(productInfo)}`)
  }catch(err){
    next(err)
  }
}

async function updateProductInfo(req, res, next){
  try{
    let productInfo = req.body
    if(!productInfo.productId){
      throw new Error('Inform product ID')
    }
    productInfo = await productsService.updateProductInfo(productInfo)
    res.send(productInfo)
    logger.info(`PUT /products/info - ${JSON.stringify(productInfo)}`)
  }catch(err){
    next(err)
  }
}

async function createReview(req, res, next){
  try{
    let params = req.body
    if(!params.productId || !params.review){
      throw new Error('Please fill product ID and Review')
    }
    await productsService.createReview(params.review, params.productId)
    res.end()
    logger.info(`POST /products/reviews/`)
  }catch(err){
    next(err)
  }
}

async function deleteReview(req, res, next){
  try{
    await productsService.deleteReview(req.params.id, req.params.index)
    res.end()
    logger.info(`DELETE /products/${req.params.id}/reviews/${req.params.index}`)
  }catch(err){
    next(err)
  }
}

async function getProductsInfo(req, res, next){
  try{
    res.send(await productsService.getProductsInfo())
    logger.info(`GET /products/info`)
  }catch(err){
    next(err)
  }
}

async function deleteProductInfo(req, res, next){
  try{
    res.send(await productsService.deleteProductInfo(req.params.id))
    logger.info(`DELETE /products/info`)
  }catch(err){
    next(err)
  }
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductInfo,
  updateProductInfo,
  createReview,
  deleteReview,
  getProductsInfo,
  deleteProductInfo
}