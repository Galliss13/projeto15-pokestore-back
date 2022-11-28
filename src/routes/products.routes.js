import { Router } from "express";
import {
  getProducts, insertProducts
} from "../controllers/products.controller.js";
import { authTokenValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/products", authTokenValidation, insertProducts)
router.get("/products", authTokenValidation, getProducts);

export default router;
