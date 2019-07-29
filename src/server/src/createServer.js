const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const db = require("./db");

//Create the server

const createServer = () => {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    //To just get rid of the validation errors
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    //Para ma manipulate mo yung data using db
    //Expose the database to every request
    context: req => ({ ...req, db })
  });
};

module.exports = createServer;
