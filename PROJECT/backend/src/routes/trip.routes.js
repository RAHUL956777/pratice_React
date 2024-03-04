import { Router } from "express";
import {
  createTrip,
  deleteTrip,
  getAllTrips,
  getTrip,
  updateTrip,
} from "../controllers/trip.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { adminOnly } from "../middlewares/auth.middlewares.js";

const router = Router();

router
  .route("/newtrip")
  .post(upload.fields([{ name: "image", maxCount: 1 }]), adminOnly, createTrip);

router.get("/all-trips", adminOnly, getAllTrips);

router.get("/get-trip", adminOnly, getTrip);

router.put("/update-trips/:id", upload.any(), adminOnly, updateTrip);

router.delete("/delete-trip/:id", adminOnly, deleteTrip);

export default router;
