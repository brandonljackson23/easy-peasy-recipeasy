//Dependencies
import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { removeRecipeId } from "../utils/localStorage";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import { useMutation } from "@apollo/react-hooks";
import { REMOVE_RECIPE } from "../utils/mutations";

const SavedRecipes = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [removeRecipe, { error }] = useMutation(REMOVE_RECIPE);
  const userData = data?.me || [];

  // create function that accepts the recipe's mongo _id value as param and deletes the recipe from the database
  // recipeId may be changed depends on the API we use (will need to match)
  const handleDeleteRecipe = async (recipeId) => {
    //if user is loggedin get token else null
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeRecipe({
        variables: {
          id: recipeId,
        },
      });
      // upon success, remove recipe's id from localStorage
      removeRecipeId(recipeId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data is still loading display LOADING...
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved recipes!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedRecipes.length
            ? `Viewing ${userData.savedRecipes.length} saved ${
                userData.savedRecipes.length === 1 ? "recipe" : "recipes"
              }:`
            : "You have no saved recipes!"}
        </h2>
        <CardColumns>
          {userData.savedRecipes.map((recipe) => {
            return (
              <Card key={recipe.recipeId} border="dark">
                {recipe.image ? (
                  <Card.Img
                    src={recipe.image}
                    alt={`picture of ${recipe.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <p className="small">Authors: {recipe.authors}</p>
                  <Card.Text>{recipe.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteRecipe(recipe.recipeId)}
                  >
                    Delete this Recipe!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedRecipes;
