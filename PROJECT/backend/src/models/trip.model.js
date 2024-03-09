import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  saveprice: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["domestic", "international"],
    required: true,
  },
  image: {
    type: String, //cloudinary url
    required: true,
  },
});

export const Trip = mongoose.model("Trip", tripSchema);
