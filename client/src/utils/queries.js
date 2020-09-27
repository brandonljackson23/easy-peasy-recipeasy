//Dependencies
import gql from "graphql-tag";

// gql querie for 'me' logged in user
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      recipeCount
      savedRecipes {
        recipeId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
