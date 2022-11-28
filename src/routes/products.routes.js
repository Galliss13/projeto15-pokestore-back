import { Router } from "express";
import {
  getProducts
} from "../controllers/products.controller.js";
import { authTokenValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.get("/products", authTokenValidation, getProducts);

export default router;