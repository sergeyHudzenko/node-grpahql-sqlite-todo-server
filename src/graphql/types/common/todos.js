export default `
  type Todos {
    todos: [Todo]
  }

  type Todo {
    id: ID!
    userId: ID!
    title: String!
    status: String!
    created_at: String!
    updated_at: String
  }

  input AddTodoInput {
    userId: ID!
    title: String!
  }

  input RemoveTodoInput {
    id: ID!
  }

  input ChangeTodoStatusInput {
    id: ID!
    status: String!
  }
 
  type Query {
    getTodosByUser(id: ID!): Todos
    getTodosByStatus(id: ID!, status: String!): Todos
  }

  type Mutation {
    addTodo(input: AddTodoInput): Todo
    removeTodo(input: RemoveTodoInput): Boolean
    changeTodoStatus(input: ChangeTodoStatusInput): Todo
  }
`;
