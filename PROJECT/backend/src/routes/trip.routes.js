import { Router } from "express";
import { createTrip } from "../controllers/trip.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { adminOnly } from "../middlewares/auth.middlewares.js";

const router = Router();

router
  .route("/newtrip")
  .post(upload.fields([{ name: "image", maxCount: 1 }]), createTrip);

export default router;
