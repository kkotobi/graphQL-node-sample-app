// Some fake data
import { makeExecutableSchema } from "graphql-tools";
import express from "express";
import { graphqlExpress } from "apollo-server-express";

// GraphQL code.
const books = [
  {
    title: "A Brief History of Time",
    author: 'Stephen Hawking',
  },
  {
    title: 'General investigations of curved surfaces',
    author: 'Carl F Gauss',
  },
  {
    title: 'Humble Pi: When Math Goes Wrong in the Real World',
    author: 'Matt Parker',
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const server = express();

// The GraphQL endpoint , e.g: http://localhost:3000/graphql?query={books{author}}
server.get('/graphql', graphqlExpress({ schema }));


export default server;