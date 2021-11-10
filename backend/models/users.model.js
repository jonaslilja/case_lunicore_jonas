const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true, trim: true, minlength: 3 },
  password: { type: String, required: true, trim: true, minlength: 3 },
  email: { type: String, required: true, trim: true, minlength: 3 }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
