import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB Connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("pokestore")
const usersCollection = db.collection("users")
const sessionsCollection = db.collection("sessions")
const cartCollection = db.collection("cart")
const productsCollection = db.collection("products");
const purchasesCollection = db.collection("purchases"); // Collection para armazenar as compras do usuário



export {
    usersCollection,
    sessionsCollection,
    cartCollection,
    purchasesCollection,
    productsCollection
}