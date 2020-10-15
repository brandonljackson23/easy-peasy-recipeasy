// DEPENDENCIES
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// DEFINE CONNECTION
const MONGODB_URI = `mongodb+srv://group1:${process.env.MPASS}@cluster0.lqst8.mongodb.net/${process.env.MDB}?retryWrites=true&w=majority&replicaSet=primary`
// MONGOOSE CONNECTION
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
// EXORTS
module.exports = mongoose.connection;
