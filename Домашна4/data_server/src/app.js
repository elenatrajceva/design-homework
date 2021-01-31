const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const {
  resolvers,
  typeDefs
} = require('./api/graphql');
require('dotenv').config();

const middlewares = require('./middlewares');
require('./api/db/db_connection');

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

server.applyMiddleware({ app, path: process.env.APOLLLO_PATH });
app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
