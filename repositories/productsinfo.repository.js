import { getClient } from './mongodb.js'

async function createProductInfo(productInfo){
  const client = getClient()
  try{
    await client.connect()
    return await client.db('Store').collection('productInfo').insertOne(productInfo)
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

async function updateProductInfo(productInfo){
  const client = getClient()
  try{
    await client.connect()
    return await client.db('Store').collection('productInfo').updateOne({
      productId: productInfo.productId
    },{
      $set: {...productInfo}
    })
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

async function getProductInfo(productId){
  const client = getClient()
  try{
    await client.connect()
    const product = await client.db('Store').collection('productInfo').findOne({productId})
    return product
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

async function createReview(review, productId){
  try{
    const productInfo = await getProductInfo(productId)
    productInfo.reviews.push(review)
    await updateProductInfo(productInfo)
  }catch(err){
    throw err
  }
}

async function deleteReview(productId, index){
  try{
    const productInfo = await getProductInfo(productId)
    productInfo.reviews.splice(index, 1)
    await updateProductInfo(productInfo)
  }catch(err){
    throw err
  }
}

async function getProductsInfo(){
  const client = getClient()
  try{
    await client.connect()
    return await client.db('Store').collection('productInfo').find({}).toArray()
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

async function deleteProductInfo(productId){
  const client = getClient()
  try{
    await client.connect()
    await client.db('Store').collection('productInfo').deleteOne({productId})
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

export default{
  createProductInfo,
  updateProductInfo,
  getProductInfo,
  createReview,
  deleteReview,
  getProductsInfo,
  deleteProductInfo
}