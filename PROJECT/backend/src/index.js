import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// require("dotenv").config({ path: "./.env" });
dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
      app.on("error", (error) => {
        console.log(error);
        throw error;
      });
    });
  })
  .catch((error) => {
    console.log("Mongodb connection failed !!!", error);
  });

/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME} `);
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();

*/
