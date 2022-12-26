const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      wing: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
});

module.exports = mongoose.model("Data", dataSchema);
