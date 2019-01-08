import { isLoading, hasErrored, addHousesSuccess } from '../actions'

export const fetchHouses = (url) => {

	return async (dispatch) => {

		try {
			dispatch(isLoading(true))
			const response = await fetch(url)

			if(!response.ok) {
				throw Error(response.statusText)
			}

			const result = await response.json()
			addHousesSuccess(result)
		} catch (error) {
			dispatch(hasErrored(true))
		}
	}
}