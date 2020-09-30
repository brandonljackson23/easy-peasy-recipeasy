// DEPENDENCIES
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchRecipes from "./pages/SearchRecipes";
import SavedRecipes from "./pages/SavedRecipes";
import Navbar from "./components/Navbar";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
// Apollo Client
const client = new ApolloClient({
  request: (operation) => {
    //token is pulled from localStorage
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        // if the token is there set Bearer 'token' else ''
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});
// App - Wrapped with Apollo Provider
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchRecipes} />
            <Route exact path="/saved" component={SavedRecipes} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}
// EXPORTS
export default App;
