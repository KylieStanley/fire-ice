export const addHousesSuccess = (houses) => ({
	type: 'FETCH_HOUSE_SUCCESS',
	houses
})

export const isLoading = (bool) => ({
	type: 'IS_LOADING',
	isLoading: bool
})

export const hasErrored = (message) => ({
	type: 'HAS_ERRORED',
	message
})