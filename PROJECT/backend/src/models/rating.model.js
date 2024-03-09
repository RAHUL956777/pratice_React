// models/Rating.js
import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
  },
  stars: {
    type: String,
    min: 1,
    max: 5,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    enum: ["domestic", "international"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Rating = mongoose.model("Rating", ratingSchema);
