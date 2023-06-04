const mongoose = require("../connects/mongoose");

const usersSchema = new mongoose.Schema(
  {
    f_name: String,
    l_name: String,
    b_date: Date,
    email: String,
    password: String,
    created_at: Date,
    updated_at: [Date],
  },
  {
    timestamps: {
      currentTime: () => Math.floor(Date.now() / 1000),
    },
  }
);

let Users = mongoose.model("users", usersSchema);

module.exports = Users;
