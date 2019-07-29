import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import withApollo from "next-with-apollo";
import { endpoint } from "../config";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4444/"
});

const createClient = ({ headers }) => {
  return new ApolloClient({
    cache,
    link,
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
};

export default withApollo(createClient);
