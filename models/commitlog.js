const mongoose = require("mongoose");
const CommitLogSchema = new mongoose.Schema({
  plate_number: {
    type: String,
  },
  organization_name: {
    type: String,
  },
  organization_name_khmer: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
  },
  vehicle_type: {
    type: String
  }
});

module.exports = mongoose.model("CommitLog", CommitLogSchema);
