const houseReducer = (state=[], action) => {
	switch(action.type) {
		case 'FETCH_HOUSE_SUCCESS':
			return action.type
		default:
			return state
	}
}


const isLoading = (state=false, action) => {
	switch(action.type) {
		case 'IS_LOADING':
			return action.type
		default:
			return state
	}
}



const hasErrored = (state='', action) => {
	switch(action.type) {
		case 'HAS_ERRORED':
			return action.type
		default:
			return state
	}
}