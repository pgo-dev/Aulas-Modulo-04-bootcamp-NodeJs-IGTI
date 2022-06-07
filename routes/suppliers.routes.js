import express from "express";
import suppliersController from "../controllers/suppliers.controller.js"

const router = express.Router()

router.post('/', suppliersController.createSupplier)
router.get('/', suppliersController.getSuppliers)
router.get('/:id', suppliersController.getSupplier)
router.delete('/:id', suppliersController.deleteSupplier)
router.put('/', suppliersController.updateSupplier)

export default router