import { mergeTypeDefs } from '@graphql-tools/merge';
import todos from './todos.js';
import users from './users.js';

const types = [todos, users];

export default mergeTypeDefs(types);
