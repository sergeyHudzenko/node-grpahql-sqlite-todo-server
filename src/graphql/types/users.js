export default `
  type User {
    id: ID
    name: String
    password: String
    email: String
    created_at: String
  }

  type UserWithoutPassword {
    id: ID
    name: String
    email: String
    created_at: String
  }

  input UserInputForAdding {
    name: String!
    password: String!
    email: String!
  }

  input UserInputForLogin {
    password: String!
    email: String!
  }
 
  type Users {
    users: [UserWithoutPassword]
  }

  type Query {
    getUser(id: ID!): UserWithoutPassword
    getAllUsers: Users
  }

  type UserWithToken {
    userId: ID!,
    token: String!
  }
  
  type Mutation {
    addUser(input: UserInputForAdding): User
    login (input: UserInputForLogin): UserWithToken
  }
`