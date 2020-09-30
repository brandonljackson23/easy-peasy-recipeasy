// DEPENDENCIES
import gql from "graphql-tag";
// ME Query Export
export const QUERY_ME = gql`
  {
    me {
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