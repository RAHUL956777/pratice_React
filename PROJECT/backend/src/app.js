import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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


// routes declaration (middleware declaration)
app.use("/api/v1/users", userRouter)


export { app };
