const { gql } = require('apollo-server')

module.exports = gql`
	"Supported UI components"
	enum ComponentType {
		"A detail card displays child components within a card view"
		DETAIL_CARD

		"A toolbar is the header for a screen, used to display a title and any child components"
		TOOLBAR

		"Breadcrumbs are navigational links that represent where the user currently is"
		BREADCRUMBS

		"A vertical content container that supports scrolling"
		VERTICAL_SCROLLER

		"A search bar that allows textual input to search for content"
		SEARCH_BAR

		"Text that is to be used as a title for screens or content sections"
		TITLE_TEXT

		"Body text that is to be used for standard content"
		TEXT

		"An image component used to display images on screen"
		IMAGE

		"A component used to display formatted snippets of code"
		CODE_SNIPPET

		"A component used to display markdown content"
		MARKDOWN

		"A component used to display a hyperlink"
		LINK

		"A container for the content of an article"
		ARTICLE_CONTENT

		"A footer component used to place content at the bottom of a screen"
		FOOTER

		"A component used to link to the next/previous article"
		ARTICLE_LINK
	}

	interface Component {
		"The ComponentType that represents the type of this UI component"
		type: ComponentType!
	}

	type Image implements Component {
		"The URL of the image to be loaded"
		content: String!
		type: ComponentType!
	}

	type CodeSnippet implements Component {
		"The URL for the dark theme code snippet"
		urlDark: String!
		"The URL for the light theme code snippet"
		urlLight: String!
		type: ComponentType!
	}

	type Markdown implements Component {
		"The markdown content to be rendered"
		content: String!
		type: ComponentType!
	}

	type Breadcrumbs implements Component {
		"The markdown content to be rendered"
		content: [Component!]!
		type: ComponentType!
	}

	type Text implements Component {
		"The textual content to be displayed"
		content: String!
		type: ComponentType!
	}

	type Link implements Component {
		"The text to be displayed for the link"
		link: String!
		"The slug for the linked location"
		slug: String!
		type: ComponentType!
	}

	type DetailCard implements Component {
		"The title to be displayed on the card"
		title: String!
		"The description for the card content"
		description: String
		image: String!
		"The slug for where the card links to"
		slug: String!
		type: ComponentType!
	}

	type VerticalScroller implements Component {
		"The list of components to be displayed in the scroller"
		content: [Component!]!
		type: ComponentType!
	}

	type Toolbar implements Component {
		"The list of components to be displayed within the toolbar"
		children: [Component!]
		type: ComponentType!
	}

	type Searchbar implements Component {
		"The list of components to be displayed within the searchbar"
		label: String!
		type: ComponentType!
	}
`
