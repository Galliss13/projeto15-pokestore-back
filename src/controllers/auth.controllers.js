import { sessionsCollection, usersCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

export async function signUp(req, res) {
    
    const user = res.locals.user;

    // criptografa a senha e insere usuário no banco de dados

    const passwordHash = bcrypt.hashSync(user.password, 10);
    try{
        await usersCollection.insertOne({...user, password: passwordHash})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function signIn(req, res) {

    const user = res.locals.user;

    //cria uma nova sessão com um novo token de autenticação

    const token = uuidV4()
    try {
        await sessionsCollection.insertOne({token, userId: user._id})
        res.send({token})
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}