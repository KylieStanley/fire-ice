import { isLoading, hasErrored, addHousesSuccess } from '../actions'
import { fetchSwornMembers } from './fetchSwornMembers'
import { cleanHouses } from '../helper'

export const fetchHouses = (url) => {

	return async (dispatch) => {
		try {
			dispatch(isLoading(true))
			const response = await fetch(url)

			if(!response.ok) {
				throw Error(response.statusText)
			}

			dispatch(isLoading(false))
			const result = await response.json()
			const cleanedHouses = cleanHouses(result)
			const swornMembers = await dispatch(fetchSwornMembers(cleanedHouses))
			// console.log(swornMembers)
			dispatch(addHousesSuccess(cleanedHouses))
		} catch (error) {
			dispatch(hasErrored(error.message))
		}
	}
}

