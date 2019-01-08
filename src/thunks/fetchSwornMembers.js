import { isLoading, hasErrored, addHousesSuccess } from '../actions'

export const fetchSwornMembers = (cleanHouses) => {
  return async (dispatch) => {

    dispatch(isLoading(true))

    const unresolvedPromises = cleanHouses.map(async house => {
      const membersArray = house.swornMembers.map(async member => {

      try {
        const response = await fetch(member)
        if(!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(isLoading(false))
        const data = await response.json()
        return data.name
      } catch (error) {
        dispatch(hasErrored(error.message))
        }
      })

       const newmembers = Promise.all(membersArray)
       
      return {...house, swornMembers: newmembers}
    })
    return Promise.all(unresolvedPromises)
  }
}