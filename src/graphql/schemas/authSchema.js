import { addResolversToSchema, makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from '../types/auth/index.js';
import resolvers from '../resolvers/index.js';

const schema = makeExecutableSchema({ typeDefs });

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers: resolvers.authResolver,
});

export default schemaWithResolvers;
