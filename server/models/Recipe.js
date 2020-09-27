const { Schema } = require("mongoose");

// This is a sub document schema, it won't become its own model
// but we'll use it as the schema for the User's `savedRecipes` array in User.js
// we might need to add or remove properties from this
const recipeSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved recipe id from WHAT EVER API WE USE
  // (WE WILL NEED TO MAKE THIS MATCH IT TO TAKE IN THE CORRECT ID)
  recipeId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = recipeSchema;
