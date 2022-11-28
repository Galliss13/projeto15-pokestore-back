import { cartCollection } from "../database/db.js";

export async function postProductIntoCart (req, res) {

    const user = res.locals.user

    // inserção do produto selecionado ao carrinho

    const product = req.body
    try {
        await cartCollection.insertOne({
            email: user.email,
            productId: product._id
        })
    } catch(err) {
        console.log(err);
        res.sendStatus(500)
    } 
}

export async function deleteProductInCart (req, res) {

    const user = user.locals.user 
    const targetProduct = req.params.productId

    // verifica se vai apagar um produto específico ou todos do carrinho, e apaga
    
    if(req.params.productId) {
        try {
            await cartCollection.deleteOne({productId: targetProduct.productId})
            res.sendStatus(200)
        } catch(err) {
            console.log(err)
            res.sendStatus(500)
        }
    } else {
        try {
            await cartCollection.deleteMany({email: user.email})
            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
}