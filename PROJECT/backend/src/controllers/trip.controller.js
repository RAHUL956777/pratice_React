import { asyncHandler } from "../utils/asyncHandler.js";
import { Trip } from "../models/trip.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponce.js";

const createTrip = asyncHandler(async (req, res) => {
  const { location, price, saveprice, type } = req.body;

  if (!location || !price || !saveprice || !type) {
    throw new ApiError(400, "All fields are required");
  }

  if (!type || !["domestic", "international"].includes(type)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid trip type" });
  }

  const imageLocalPath = req.files?.image[0]?.path;

  if (!imageLocalPath) {
    throw new ApiError(400, "Image  is required");
  }

  const image = await uploadOnCloudinary(imageLocalPath);

  if (!image) {
    throw new ApiError(400, "Image upload failed");
  }

  const newTrip = await Trip.create({
    type,
    location,
    price,
    image: image.url,
    saveprice,
  });

  if (!newTrip) {
    throw new ApiError(500, "Something went wrong while Creating Trip");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, newTrip, "New Trip created sucessfully"));
});

const getAllTrips = asyncHandler(async (_, res) => {
  const trips = await Trip.find();

  if (!trips || trips.length === 0) {
    throw new ApiError(404, "No Trips Found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, trips, "Trips retrieved successfully"));
});

const updateTrip = asyncHandler(async (req, res) => {
  const tripId = req.params.id;

  // Find the trip in the database by ID
  const tripToUpdate = await Trip.findById(tripId);

  // Check if the trip exists
  if (!tripToUpdate) {
    throw new ApiError(404, "Trip not found");
  }

  // Handle image upload if a new image is provided
  if (req.files && req.files.image && req.files.image[0]) {
    const imageLocalPath = req.files.image[0].path;
    const image = await uploadOnCloudinary(imageLocalPath);

    if (!image) {
      throw new ApiError(400, "Image upload failed");
    }

    // Update the trip's image URL
    tripToUpdate.image = image.url;
  }

  // Update other trip fields if they are provided in the request body
  if (req.body.location !== undefined) {
    tripToUpdate.location = req.body.location;
  }

  if (req.body.price !== undefined) {
    tripToUpdate.price = req.body.price;
  }

  if (req.body.saveprice !== undefined) {
    tripToUpdate.saveprice = req.body.saveprice;
  }

  // Save the updated trip to the database
  const updatedTrip = await tripToUpdate.save();

  return res
    .status(200)
    .json(new ApiResponse(200, updatedTrip, "Trip updated successfully"));
});

const deleteTrip = asyncHandler(async (req, res) => {
  const tripId = req.params.id;

  if (!tripId) {
    throw new ApiError(404, "Trip not found");
  }

  await Trip.findByIdAndDelete(tripId);

  return res
    .status(200)
    .json(new ApiResponse(200, "Trip deleted successfully"));
});

const searchTrips = asyncHandler(async (req, res) => {
  const { location, price } = req.query;

  // Check if the query parameter is provided
  if (!location) {
    throw new ApiError(400, "Search query is required.");
  }

  // Use Mongoose find to search for trips based on the query parameter
  const trips = await Trip.find({
    $or: [
      { location: { $regex: location, $options: "i" } }, // Case-insensitive search for location
    ],
  });

  return res
    .status(200)
    .json(new ApiResponse(200, trips, "Trips retrieved successfully"));
});

const getPaginatedTrips = asyncHandler(async (req, res) => {
  const { limit = 4, skip = 0 } = req.query;

  const trips = await Trip.find().skip(parseInt(skip)).limit(parseInt(limit));

  if (!trips || trips.length === 0) {
    throw new ApiError(404, "No Trips Found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, trips, "Trips retrieved successfully"));
});

export { createTrip, getAllTrips, updateTrip, deleteTrip, searchTrips,getPaginatedTrips };
