const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a name for type of workout"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout name"
  },
  distance: {
    type: Number
  },
  weigth: {
    type: Number
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  duration: {
    type: Number,
    required: "Enter a name for duration"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Workout", exerciseSchema);

module.exports = Exercise;