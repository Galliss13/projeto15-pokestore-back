import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.routes.js"
import cartRoutes from "./routes/cart.routes.js"
import productsRoutes from "../src/routes/products.routes.js"
import purchasesRoutes from "../src/routes/purchasesRoutes.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use(authRoutes)
app.use(cartRoutes)
app.use(productsRoutes)
app.use(purchasesRoutes)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app running in port ${port}`))

