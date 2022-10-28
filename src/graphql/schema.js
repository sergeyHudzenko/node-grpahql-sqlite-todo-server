import { addResolversToSchema, makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from './types/index.js';
import resolvers from './resolvers/index.js';

const schema = makeExecutableSchema({typeDefs});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers
})

export default schemaWithResolvers;