/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { graphiqlExpress, graphqlExpress} from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { createServer } from 'http';

import constants from './config/constants';
import './config/db';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers'; 

const app = express();


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/graphiql', graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH
}));
app.use(constants.GRAPHQL_PATH, graphqlExpress({
    schema
}))

const graphqlServer = createServer(app);

// Server
graphqlServer.listen(constants.PORT, () => console.log(`
============================
Server is running on ${constants.PORT}..
=============================`));


