import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';
import { expressjwt } from 'express-jwt';
import bodyParser from 'body-parser';
import schemas from './src/graphql/schemas/index.js';

dotenv.config({ path: '.env' });

const APP = express();
const PORT = 4000;

APP.use(cors());
APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));

// auth middleware
const auth = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  credentialsRequired: false,

});

APP.use(
  '/auth',
  bodyParser.json(),
  graphqlHTTP(() => ({
    schema: schemas.authSchema,
    graphiql: true,
  })),
);

APP.use(
  '/',
  bodyParser.json(),
  auth,
  graphqlHTTP((req) => ({
    schema: schemas.schema,
    graphiql: true,
    context: {
      user: req.user,
    },
  })),
);

APP.listen(PORT, () => {
  console.log(`Running on at http://localhost:${PORT}`);
});
