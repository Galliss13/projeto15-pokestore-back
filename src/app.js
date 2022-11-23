import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import joi from 'joi'

import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

//Conexão ao servidor

const mongoClient = new MongoClient(process.env.MONGO_URI)
let db
try {
    await mongoClient.connect()
    db = mongoClient.db("pokestore")
    const usersCollection = db.collection("users")
    const sessionsCollection = db.collection("sessions")
} catch (err) {
    console.log(err);
}

//Schemas

const userSchema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().email().required(),
    password: joi.string().required().min(3),
    repassword: joi.string().required().min(3)
})


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app running in port ${port}`))