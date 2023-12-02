const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  icon: {
    type: String,
  },
  eventKey: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
});

const App = mongoose.model("app", AppSchema);

module.exports = App;
