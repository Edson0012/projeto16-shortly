import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import { validateSchema } from "../middlewares/validate.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";

const router = Router();

router.post('/signup', validateSchema(signUpSchema), signUp );
router.post('/signin', validateSchema(signInSchema), signIn );

export default router