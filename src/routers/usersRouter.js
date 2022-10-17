import { Router } from "express";
import { userData } from "../controllers/usersController.js";
import { validateToken } from "../middlewares/tokenValidate.js";

const router = Router();

router.get('/users/me', validateToken ,userData)

export default router;