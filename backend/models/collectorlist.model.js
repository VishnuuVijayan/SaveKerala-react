const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collector_listSchema = new Schema(
  {
    user_id: { type: Number, required: true, trim: true },
    district: { type: String, required: true, trim: true },
    collector_fname: { type: String, required: true, trim: true },
    collector_lname: { type: String, required: true, trim: true },
    contact: { type: Number, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    experience: { type: Number, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

const Collector_list = mongoose.model("Collector_list", collector_listSchema);

module.exports = Collector_list;
