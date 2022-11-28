import { Router } from "express";
import { getCheckout, insertCheckout } from "../controllers/checkoutControllers.js";
import { authTokenValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/checkout", authTokenValidation, insertCheckout)
router.get("/checkout", authTokenValidation, getCheckout);

export default router;
