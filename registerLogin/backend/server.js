import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is running sucessfully at ${PORT}`);
});

// database connection
mongoose
  .connect(`${process.env.DATABASE_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

  // schema
  const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
  })

  // model
  const User = mongoose.model("User",userSchema);


//   routes
app.post("/login", (req,res) => {
    res.send("hello from login");
});
app.post("/register", (req,res) => {
    console.log(req.body);
});
