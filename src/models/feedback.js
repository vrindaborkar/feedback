const mongoose = require("mongoose");

const Feedback = mongoose.model(
  "Feedback",
  new mongoose.Schema({
    star:Number,
    Message:String,
    
  })
);

module.exports = Feedback;