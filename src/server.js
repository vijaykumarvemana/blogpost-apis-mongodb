import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import blogsRouter from './services/index.js'
import listEndpoints from 'express-list-endpoints'


const server = express()
const port = process.env.PORT || 3001

server.use(cors())
server.use(express.json())


server.use("/blogPosts", blogsRouter)


mongoose.connect(process.env.MDB_CONNECTION)

mongoose.connection.on("connected", () => {
    console.log("Successfully connected to mongoDB")
    server.listen(port, () => {
        console.log("Server running on port:", port)
    })
})

mongoose.connection.on("error", err => {
    console.log(err)
})


