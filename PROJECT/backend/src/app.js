import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

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
import userRouter from "./routes/user.routes.js";
import tripRouter from "./routes/trip.routes.js";

// routes declaration for user (middleware declaration)
app.use("/api/v1/users", userRouter);

// routes declaration for trip (middleware declaration)
app.use("/api/v1/trips", tripRouter);

export { app };
