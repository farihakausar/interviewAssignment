
const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  availability: [String],
  location: String,
  contact: String,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = {
  Doctor,
};
