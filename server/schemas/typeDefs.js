// Dependencies
const { gql } = require("apollo-server-express");

// This is the typeDefs folder for the book search(book changed to recipe)
// This is a good starting point but may not be what we need.
// We might need to change, add, or remove things.

//need User, Query, Recipe, Auth, Mutation, & savedRecipe
const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    _id: ID
    username: String
    email: String
    recipeCount: Int
    savedRecipes: [Recipe]
  }

  type Recipe {
    recipeId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRecipe(input: String!): User
    removeRecipe(recipeId: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }

  type savedRecipe {
    recipeId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }
`;

module.exports = typeDefs;
