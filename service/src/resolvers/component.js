const COMPONENT = require('../enums/component')

module.exports = {
	Component: {
		__resolveType: (component) => {
			switch (component.type) {
				case COMPONENT.TOOLBAR:
					return 'Toolbar'
				case COMPONENT.BREADCRUMBS:
					return 'Breadcrumbs'
				case COMPONENT.DETAIL_CARD:
					return 'DetailCard'
				case COMPONENT.VERTICAL_SCROLLER:
					return 'VerticalScroller'
				case COMPONENT.SEARCH_BAR:
					return 'Searchbar'
				case COMPONENT.LINK:
					return 'Link'
			}
		}
	}
}
