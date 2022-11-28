import { cartCollection } from "../database/db.js";

export async function postProductIntoCart (req, res) {

    const user = res.locals.user

    // inserção do produto selecionado ao carrinho

    const product = req.body
    try {
        await cartCollection.insertOne({
            email: user.email,
            description: product.description,
            productId: product._id,
            image: product.image,
            name: product.name,
            amount: product.amount
        })
    } catch(err) {
        console.log(err);
        res.sendStatus(500)
    } 
}

export async function getCartProducts (req, res) {
    try {
        const cartProducts = await cartCollection.find().toArray()
        res.status(200).send(cartProducts)
    } catch (err) {
        console.log(err)
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