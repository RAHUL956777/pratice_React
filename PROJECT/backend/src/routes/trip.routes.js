import { Router } from "express";
import { createTrip } from "../controllers/trip.controller.js";
import { adminOnly } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/newtrip").post(adminOnly, createTrip);

export default router;
