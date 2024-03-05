import { Trip } from "../models/trip.model.js";
import { Rating } from "../models/rating.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponce.js";
import { ApiError } from "../utils/ApiError.js";

const createRating = asyncHandler(async (req, res) => {
  const { trip, stars, description } = req.body;

  if (!trip || !stars) {
    throw new ApiError(400, "All fields are required");
  }

  const existingTrip = await Trip.findById(trip);

  if (!existingTrip) {
    throw new ApiError(400, "Trip not found");
  }

  const rating = new Rating({
    user: req.user._id,
    trip,
    stars,
    description,
  });

  await rating.save();

  return res
    .status(201)
    .json(new ApiResponse(200, rating, "Rating created Successfully"));
});

export { createRating };
