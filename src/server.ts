import express, { Express } from "express"
import colors from 'colors'
import router from "./route"
import db from "./config/db"



//base de datos

async function connectDB() {

    try{
        await db.authenticate()
        db.sync()
        console.log(colors.green('conexion exitosa a la base de datos'))

    }catch(error){
        console.log(error)
        console.log(colors.red('hubo un error al conectar a la base de datos'))
    }
    
}

connectDB()
const server: Express = express()

server.use(express.json())


server.use('/api/products', router)



export default server
