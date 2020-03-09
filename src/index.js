// NPM
import express from 'express';
import * as bodyParser from 'body-parser';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import makeExecutableSchema from 'graphql-tools';

// Local
import route from './route';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(route);

app.listen(3000, () => console.log('Go to http://localhost:3000/graphql?query=... to run queries'));