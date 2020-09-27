//Dependencies
import gql from "graphql-tag";

//querie for adding new users
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

//querie for loging in for existing users
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

//querie for saving recipes to users saved recipe list
export const SAVE_RECIPE = gql`
  mutation saveRecipe($input: savedRecipe!) {
    saveRecipe(input: $input) {
      _id
      username
      email
      recipeCount
      savedRecipes {
        # _id
        recipeId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

//querie for removing recipes from users saved recipe list
export const REMOVE_RECIPE = gql`
  mutation removeRecipe($recipeId: String!) {
    removeRecipe(recipeId: $recipeId) {
      _id
      username
      email
      recipeCount
      savedRecipes {
        # _id
        recipeId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

//some of these may need to be changed and we will prob need to add more
