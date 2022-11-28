import { Router } from "express";
import {
  postProductIntoCart,
  deleteProductInCart,
  getCartProducts,
} from "../controllers/client.controller";
import { authTokenValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.get("/cart", authTokenValidation, getCartProducts)
router.post("/cart", authTokenValidation, postProductIntoCart);
router.delete("/cart:productId",authTokenValidation, deleteProductInCart);

export default router;