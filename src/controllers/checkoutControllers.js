import { purchasesCollection } from "../database/db.js";

export async function insertCheckout(req, res) {
  const values = req.body;
  try {
    await purchasesCollection.insertMany(values);
    res.status(201).send("Compra realizada com sucesso!");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getCheckout(req, res) {
  try {
    const getPurchases = await purchasesCollection.find().toArray();
    res.send(getPurchases);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
