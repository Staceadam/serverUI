const COMPONENT = require('../enums/component')

const MOCK_DATA = [
	{
		title: 'testing 123',
		description: 'this is a description',
		image: 'https://fillmurray.com/200/300',
		slug: 'http://www.example-slug.com'
	},
	{
		title: 'testing 456',
		description: 'this is a description',
		image: 'https://fillmurray.com/200/300',
		slug: 'http://www.example-slug.com'
	},
	{
		title: 'testing 789',
		description: 'this is a description',
		image: 'https://fillmurray.com/200/300',
		slug: 'http://www.example-slug.com'
	}
]

module.exports = {
	Query: {
		categories: async () => {
			return {
				children: [
					{
						type: COMPONENT.TOOLBAR,
						children: [
							{
								label: 'Search Example',
								type: COMPONENT.SEARCH_BAR
							},
							{
								content: [
									{
										link: 'Home',
										slug: '/',
										type: COMPONENT.LINK
									}
								],
								type: COMPONENT.BREADCRUMBS
							}
						]
					},
					{
						type: COMPONENT.VERTICAL_SCROLLER,
						content: MOCK_DATA.map(({ title, description, image, slug }) => {
							return {
								title,
								description,
								image,
								slug,
								type: COMPONENT.DETAIL_CARD
							}
						})
					}
				]
			}
		}
	}
}
