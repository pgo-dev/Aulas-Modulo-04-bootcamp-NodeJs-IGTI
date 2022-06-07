import express from "express"
import salesController from "../controllers/sales.controller.js"

const router = express.Router()

router.post('/', salesController.createSale)
router.get('/', salesController.getSales)
router.get('/:id', salesController.getSale)
router.delete('/:id', salesController.deleteSale)
router.put('/', salesController.updateSale)

export default router