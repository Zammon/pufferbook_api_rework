const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    f_name: String,
    l_name: String,
    b_date: Date,
    email: String,
    password_hash: String,
    created_at: Date,
    updated_at: Date,
  },
  {
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
    },
  }
);

let Users = (module.exports = usersSchema);
