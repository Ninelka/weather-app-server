const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/schema.js");
const resolvers = require("./resolvers");
const WeatherAPI = require("./datasources/weather-api");
require("dotenv").config();

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        weatherAPI: new WeatherAPI(),
      };
    },
  });

  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer(typeDefs, resolvers);
