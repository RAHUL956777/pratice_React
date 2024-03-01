import { asyncHandler } from "../utils/asyncHandler.js";
import { Trip } from "../models/trip.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/ApiError.js";

const createTrip = asyncHandler(async (req, res) => {
  const { location, price, saveprice } = req.body;

  console.log(location, price, saveprice,req.body);

  if (location == undefined || price == undefined || saveprice == undefined) {
    throw new ApiError(400, "All fields are required");
  }

  const imageLocalPath = req.files?.avatar[0]?.path;

  if (!imageLocalPath) {
    throw new ApiError(400, "Image  is required");
  }

  const image = await uploadOnCloudinary(imageLocalPath);

  if (!image) {
    throw new ApiError(400, "Image upload failed");
  }

  const newTrip = new Trip({
    location,
    price,
    image: image.url,
    saveprice,
  });

  const createdTrip = await newTrip.save();

  if (!createdTrip) {
    throw new ApiError(500, "Something went wrong while Creating Trip");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdTrip, "New Trip created sucessfully"));
});

export { createTrip };
