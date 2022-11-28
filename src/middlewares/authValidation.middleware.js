import { sessionsCollection, usersCollection } from "../database/db.js";
import { userSchema } from "../models/users.model.js";
import bcrypt from "bcrypt";

export function userSchemaValidation(req, res, next) {
    
    //valida os campos (possível middleware)
    
    const user = req.body;
    const { error } = userSchema.validate(user, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }    
    res.locals.user = user;
    next()
}

export async function signInBodyValidation(req, res) {
    //verifica dados do usuário (possível middleware)

    const { email, password } = req.body
    try {
        const user = await usersCollection.findOne(email)
        if (!user) {
            res.sendStatus(401)
            return
        }
        const isValidPassword = bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            res.sendStatus(401)
            return
        }
        res.locals.user = user
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
    next()
}

export async function authTokenValidation(req, res) {
    // autenticação do usuário (possível middleware)

    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '')
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
        const user = await usersCollection.findOne({_id: sessionUser?.userId})
        if (!user) {
            res.sendStatus(401)
            return
        }
        res.locals.user = user;
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }

    next()
}



