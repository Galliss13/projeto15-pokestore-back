import joi from "joi"

export const userSchema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().email().required(),
    password: joi.string().required().min(3),
    repassword: joi.string().required().min(3)
})