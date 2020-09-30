// DEPENDENCIES
const { gql } = require("apollo-server-express");
// QUERIES
/// May need to modify recipe fields depending on the API
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
    recipeId: Int
    title: String
    ingredients: [String]
    directions: String
    image: String
    link: String
  }

  input savedRecipe {
    recipeId: Int
    title: String
    ingredients: [String]
    directions: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRecipe(input: savedRecipe): User
    removeRecipe(recipeId: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;
// EXPORTS
module.exports = typeDefs;
