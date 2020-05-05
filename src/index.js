import path from 'path'
import { GraphQLServer } from 'graphql-yoga'
require('dotenv').config({ path: "./.env" })

global.knex = require('../src/config/database')

import { resolvers } from './resolvers'

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
})

server.start(() => { console.log(`😄 Server running at http://localhost:4000`) })