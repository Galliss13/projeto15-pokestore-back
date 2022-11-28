import {productsCollection} from "../database/db"
import ProductList from "../mock/Itens/ProductsList"

export async function getProducts (req, res) {
    try {
        await productsCollection.insertOne(ProductList)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}