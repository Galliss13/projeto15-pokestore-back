import { Router } from "express";
import {
  postProductIntoCart,
  deleteProductInCart,
} from "../controllers/client.controller.js";
import { authTokenValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/cart", authTokenValidation, postProductIntoCart);
router.delete("/cart:productId",authTokenValidation, deleteProductInCart);

export default router;