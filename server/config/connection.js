const mongoose = require("mongoose");

//we will need to update "mongodb://localhost/" to include the API we end up using
//MONGODB_URI will need to be set locally in the .env

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;
