const { gql } = require('apollo-server')

module.exports = gql`
	type Presentation {
		"The children that make up the presenation of a screen"
		children: [Component!]!
	}
`
