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

  type Users {
    users: [UserWithoutPassword]
  }

  type Query {
    getUser(id: ID!): UserWithoutPassword
    getAllUsers: Users
  }
`;
