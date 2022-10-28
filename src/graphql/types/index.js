import todos from './todos.js'
import users from './users.js'
import { mergeTypeDefs } from '@graphql-tools/merge'

const types = [todos, users]
 
export default mergeTypeDefs(types)