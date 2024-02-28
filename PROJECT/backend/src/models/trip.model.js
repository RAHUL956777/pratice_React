import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    saveprice:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    location:{
        type:String,
        required:true,
    },
    image: {
        type: String, //cloudinary url
        required: true,
      },

})