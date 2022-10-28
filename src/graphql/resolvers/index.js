import todos from "./todos.js";
import users from "./users.js";

// console.log({...users})
export default {
    Query: {
        ...users.QUERIES,
        ...todos.QUERIES
    },

    Mutation: {
        ...users.MUTATIONS,
        ...todos.MUTATIONS
    }
}