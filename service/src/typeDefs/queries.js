const { gql } = require('apollo-server')

module.exports = gql`
	type Query {
		"Retrieve the presentation for the categories screen"
		categories: Presentation!
	}
`
