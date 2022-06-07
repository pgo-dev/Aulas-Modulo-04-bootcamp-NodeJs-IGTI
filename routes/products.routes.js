import express from "express";
import productsController from "../controllers/products.controller.js"

const router = express.Router()

router.post('/', productsController.createProduct)
router.get('/', productsController.getProducts)
router.post('/reviews', productsController.createReview)
router.get('/info', productsController.getProductsInfo)
router.get('/:id', productsController.getProduct)
router.delete('/:id', productsController.deleteProduct)
router.put('/', productsController.updateProduct)
router.post('/info', productsController.createProductInfo)
router.put('/info', productsController.updateProductInfo)
router.delete('/:id/reviews/:index', productsController.deleteReview)
router.delete('/info/:id', productsController.deleteProductInfo)

export default router