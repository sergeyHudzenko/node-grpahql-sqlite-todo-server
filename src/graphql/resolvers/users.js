import UserLib from "../../Lib/Users/UserLib.js"

const QUERIES = {
    getUser: (_, {id}) => UserLib.getUserById(id),
    getAllUsers: () => UserLib.getAllUsers(),
}

const MUTATIONS = {
    addUser: (_, {input}) => UserLib.createUser(input),
    login: (_, {input}) => UserLib.loginUser(input)
}

export default {
    QUERIES,
    MUTATIONS
}