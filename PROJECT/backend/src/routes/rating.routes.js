import { Router } from "express";
import { createRating } from "../controllers/rating.controller.js";
import {verifyJWT} from "../middlewares/auth.middlewares.js"

const router = Router();

router.post("/create-rating/:id",verifyJWT, createRating);

export default router;
