import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETE);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid Access Token");
  }
});

export const adminOnly = asyncHandler(async (req, res, next) => {
  const { id } = req.query;
  

  if (!id) return next(new ApiError(401, "Please login to access this"));

  const user = await User.findById(id);
  if (!user) return next(new ApiError(401, "Id didn't matched"));
  if (user.role !== "admin")
    return next(new ApiError(403, "This is for admin only"));

  next();
});
