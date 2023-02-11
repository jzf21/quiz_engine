import mongoose from "mongoose";
var Schema = mongoose.Schema;

var quiz = new Schema({
  quiz_id: {
    type: String,
    required: true,
  },
  quiz_name: {
    type: String,
    required: true,
  },
  no_sections: {
    type: Number,
    required: true,
  },
  time_limit: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};

var Quiz = mongoose.model("Quiz", quiz);

export default Quiz;
