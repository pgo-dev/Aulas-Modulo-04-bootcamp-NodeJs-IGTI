import express from 'express'
import cors from 'cors'
import winston from 'winston'
import clientsRouter from './routes/clients.routes.js'
import productsRouter from './routes/products.routes.js'
import suppliersRouter from './routes/suppliers.routes.js'
import salesRouter from './routes/sales.routes.js'

//Logger:
const { combine, timestamp, label, printf } = winston.format
const myFormat = printf(({level, message, label, timestamp})=>{
  return `${timestamp} [${label}] ${level}: ${message}`
})
global.logger = winston.createLogger({
  level:"silly",
  transports:[
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: "store_api.log"})
  ],
  format: combine(
    label({ label: "store_api"}),
    timestamp(),
    myFormat
  )
})

//Express instance:
const app = express()

//Middlewares:
app.use(express.json())
app.use(cors())

//Routes:
app.use('/clients', clientsRouter)
app.use('/products', productsRouter)
app.use('/suppliers', suppliersRouter)
app.use('/sales', salesRouter)

//Error:
app.use((err, req, res, next)=>{
  logger.error(`${req.method} - ${req.baseUrl} ${err.message}`)
  console.log(err)
  res.status(400).send({error:err.message})
})

//Port:
app.listen(3000, ()=> console.log('API Started!'))