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
  name: String,
  email: String,
  password: String,
});

// model
const User = mongoose.model("User", userSchema);

//   routes
app.post("/login", (req, res) => {
  const {email,password} = req.body;
  User.findOne({email:email}).then((user,err)=>{
    if(user){
            if(user.password === password){
              res.send({message:"Login Successfull",user:user})
            }else{
              res.send({message:"Password didn't match"})
            }
    }else{
      res.send({message:"user not Registered"})
    }
  })
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email })
    .then((user, err) => {
      if (user) {
        res.send({ message: "user already exist" });
      } else {
        const user = new User({
          name,
          email,
          password,
        });

        user
          .save()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => console.log(err));
});
