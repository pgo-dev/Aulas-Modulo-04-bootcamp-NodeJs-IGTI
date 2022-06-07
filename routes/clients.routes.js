import express from "express"
import clientsController from "../controllers/clients.controller.js"

const router = express.Router()

router.post('/', clientsController.createClient)
router.get('/', clientsController.getClients)
router.get('/:id', clientsController.getClient)
router.delete('/:id', clientsController.deleteClient)
router.put('/', clientsController.updateClient)

export default router