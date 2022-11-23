import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import joi from 'joi'
import bcrypt from 'bcrypt'
import { v4 as uuidV4} from 'uuid'

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
} catch (err) {
    console.log(err);
}
const usersCollection = db.collection("users")
const sessionsCollection = db.collection("sessions")
const cartCollection = de.collection("cart")

//Schemas

const userSchema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().email().required(),
    password: joi.string().required().min(3),
    repassword: joi.string().required().min(3)
})

//Rota de cadastro

app.post('/signup', async (req,res) => {
    
    //valida os campos (possível middleware)
    
    const user = req.body;
    const { error } = userSchema.validate(user, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }    

    // criptografa a senha e insere usuário no banco de dados

    const passwordHash = bcrypt.hashSync(user.password, 10);
    try{
        await usersCollection.insertOne({...user, password: passwordHash})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

//Rota de login

app.post ('/signin', async (req,res) => {
    
    //verifica dados do usuário (possível middleware)

    const { email, password } = req.body
    let user
    try {
        user = await usersCollection.findOne(email)
        if (!user) {
            res.sendStatus(401)
            return
        }
        const isValidPassword = bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            res.sendStatus(401)
            return
        }
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }

    //cria uma nova sessão com um novo token de autenticação

    const token = uuidV4()
    try {
        await sessionsCollection.insertOne({token, userId: user._id})
        res.send({token})
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

//Rota do carrinho

app.post ('/cart', async (req,res) => {
    
    // autenticação do usuário (possível middleware)

    const { authorization } = req.header
    const token = authorization?.replace('Bearer ', '')
    let user
    if (!token) {
        res.sendStatus(401)
        return
    }
    try {
        const sessionUser = await sessionsCollection.findOne({token})
        if (!sessionUser) {
            res.sendStatus(401)
            return
        }
        user = await usersCollection.findOne({_id: sessionUser?.userId})
        if (!user) {
            res.sendStatus(401)
            return
        }
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }

    // inserção do produto selecionado ao carrinho

    const product = req.body
    try {
        await cartCollection.insertOne({
            email: user.email,
            productId: product.id
        })
    } catch(err) {
        console.log(err);
        res.sendStatus(500)
    } 
}) 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app running in port ${port}`))