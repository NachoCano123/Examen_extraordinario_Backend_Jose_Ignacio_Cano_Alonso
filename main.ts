import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"
import { Character } from "./resolvers/character.ts";
import { Episode } from "./resolvers/episode.ts";
import { Location } from "./resolvers/location.ts"
import { Query } from "./resolvers/Query.ts";
import { typeDefs } from "./gql/schema.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Character, Episode, Location, Query
  }
})

const {url} = await startStandaloneServer(server, {listen: 8000})
console.info(`Server ready at ${url}`)