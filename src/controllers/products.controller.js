import { productsCollection } from "../database/db.js";

export async function insertProducts(req, res) {
  const value = req.body;
  try {
    await productsCollection.insertMany(value);
    res.status(201).send("Produto inserido com sucesso!");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getProducts(req, res)  {
  try {
    const getAllProducts = await productsCollection.find().toArray();
    const getPokeball = getAllProducts.filter((el) => el.type === "Pokeball");
    const getPotion = getAllProducts.filter((el) => el.type === "Poção");
    res.send({ getPokeball, getPotion });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
