// DEPENDENCIES
const express = require("express");
const path = require("path");
const db = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;
// APOLLO SERVER
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
// APOLLO MIDDLEWARE
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
server.applyMiddleware({ app });
// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
//Wild Card Path
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index"));
});
// OPEN PORT
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Now listening on localhost:${PORT}`);
    console.log(
      `To use gql go to http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});
