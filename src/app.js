import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.routes"
import cartRoutes from "./routes/cart.routes"

const app = express()

app.use(express.json())
app.use(cors())
app.use(authRoutes)
app.use(cartRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app running in port ${port}`))