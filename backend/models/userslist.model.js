const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, trim: true, required: true },
  last_name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true }
});

const users_list = mongoose.model("users", userSchema);

module.exports = users_list;
