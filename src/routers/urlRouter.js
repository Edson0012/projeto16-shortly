import { Router } from "express";
import { deleteUrl, redirectUser, sendUrlShortener, shortenerUrl } from "../controllers/urlController.js";
import { validateToken } from "../middlewares/tokenValidate.js";
import { validateSchema } from "../middlewares/validate.js";
import { urlSchema } from "../schemas/urlSchema.js";

const router = Router();

router.post('/urls/shorten', validateToken, validateSchema(urlSchema), shortenerUrl);
router.get('/urls/:id', sendUrlShortener);
router.get('/urls/open/:shortUrl', redirectUser);
router.delete('/urls/:id', validateToken, deleteUrl)

export default router