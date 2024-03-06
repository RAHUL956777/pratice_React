import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.routes.js";
import tripRouter from "./routes/trip.routes.js";
import ratingRouter from "./routes/rating.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "10mb",
    extended: true,
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use(express.static("public"));
app.use(cookieParser());

// ====== *****  routes  **** =======

// routes declaration for user (middleware declaration)
app.use("/api/v1/users", userRouter);

// routes declaration for trip (middleware declaration)
app.use("/api/v1/trips", tripRouter);

//routes for rating
app.use("/api/v1/ratings", ratingRouter);

export { app };
