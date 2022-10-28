import TodoLib from "../../Lib/Todos/TodoLib.js"


const QUERIES = {
    getTodosByUser: (_, { id }) => TodoLib.getTodosByUser(id),
    getTodosByStatus: (_, { id, status }) => TodoLib.getTodosByStatus(id, status)
}

const MUTATIONS = {
    addTodo: (_, { input }) => TodoLib.addTodo(input),
    removeTodo: (_, { input }) => TodoLib.removeTodo(input),
    changeTodoStatus: (_, { input }) => TodoLib.changeTodoStatus(input)
}

export default {
    QUERIES,
    MUTATIONS
}