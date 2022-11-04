import todos from './todos.js';
import users from './users.js';

const authResolver = {
  Mutation: {
    ...users.MUTATIONS,
  },
};

const commonResolver = {
  Query: {
    ...users.QUERIES,
    ...todos.QUERIES,
  },
  Mutation: {
    ...todos.MUTATIONS,
  },
};
export default {
  authResolver,
  commonResolver,
};
