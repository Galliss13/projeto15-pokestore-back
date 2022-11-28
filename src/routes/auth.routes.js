import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import {
  signInBodyValidation,
  userSchemaValidation,
} from "../middlewares/authValidation.middleware.js";

const router = Router();

router.post("/signup", userSchemaValidation, signUp);
router.post("/signin", signInBodyValidation, signIn);

export default router;