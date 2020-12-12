const { ApolloServer, gql } = require('apollo-server')

const componentsTypes = require('./src/typeDefs/components')
const presentationTypes = require('./src/typeDefs/presentation')
const queryTypes = require('./src/typeDefs/queries')

const categoriesResolver = require('./src/resolvers/categories')
const componentResolver = require('./src/resolvers/component')

const typeDefs = [componentsTypes, presentationTypes, queryTypes]
const resolvers = [categoriesResolver, componentResolver]

const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`)
})
