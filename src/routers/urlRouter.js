import { Router } from "express";
import { shortenerUrl } from "../controllers/urlController.js";
import { validateToken } from "../middlewares/tokenValidate.js";
import { validateSchema } from "../middlewares/validate.js";
import { urlSchema } from "../schemas/urlSchema.js";

const router = Router();

router.post('/urls/shorten', validateToken, validateSchema(urlSchema), shortenerUrl);

export default router