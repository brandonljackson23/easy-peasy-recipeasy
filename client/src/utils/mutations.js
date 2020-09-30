// DEPENDENCIES
import gql from "graphql-tag";
// ADD_USER MUTATION
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// LOGIN_USER MUTATION
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// SAVE_RECIPE MUTATION
export const SAVE_RECIPE = gql`
  mutation saveRecipe($input: savedRecipe!) {
    saveRecipe(input: $input) {
      _id
      username
      email
      recipeCount
      savedRecipes {
        recipeId
        title
        ingredients
        directions
        image
        link
      }
    }
  }
`;
// REMOVE_RECIPE MUTATION
export const REMOVE_RECIPE = gql`
  mutation removeRecipe($recipeId: String!) {
    removeRecipe(recipeId: $recipeId) {
      _id
      username
      email
      recipeCount
      savedRecipes {
        recipeId
        title
        ingredients
        directions
        image
        link
      }
    }
  }
`;
