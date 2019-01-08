const addHousesSuccess = (houses) => ({
	type: 'FETCH_HOUSE_SUCCESS',
	houses
})

const isLoading = (bool) => ({
	type: 'IS_LOADING',
	isLoading: bool
})

const hasErrored = (message) => ({
	type: 'HAS_ERRORED',
	message
})