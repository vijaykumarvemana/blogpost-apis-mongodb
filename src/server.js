import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'


const server = express()
const port = process.env.PORT || 3001


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


