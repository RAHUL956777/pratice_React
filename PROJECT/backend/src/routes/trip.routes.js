import { Router } from "express";
import {
  createTrip,
  deleteTrip,
  getAllTrip,
  updateTrip,
} from "../controllers/trip.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { adminOnly } from "../middlewares/auth.middlewares.js";

const router = Router();

router
  .route("/newtrip")
  .post(upload.fields([{ name: "image", maxCount: 1 }]), createTrip);

router.get("/all-trips", getAllTrip);

router.put("/update-trips/:id", upload.any(), updateTrip);

router.delete("/delete-trip/:id", deleteTrip);

export default router;
