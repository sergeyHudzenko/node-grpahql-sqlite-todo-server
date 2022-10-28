import express from "express"
import cors from "cors"
import schema from "./src/graphql/schema.js"
import { graphqlHTTP } from 'express-graphql'
import dotenv from "dotenv"
import { expressjwt } from "express-jwt"
import bodyParser from "body-parser"

dotenv.config({path:'.env'})

const APP = express()
const PORT = 4000

APP.use(cors())
APP.use(express.json())
APP.use(express.urlencoded({ extended: true }))

// auth middleware
const auth = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  credentialsRequired: false
})

APP.use(
    '/',
    bodyParser.json(), 
    auth, 
    graphqlHTTP(req => ({
      schema,
      graphiql: true,
      context: {
        user: req.user
      }
    }))
  )

APP.listen(PORT, () => {
    console.log(`Running on at http://localhost:${PORT}`)
})
