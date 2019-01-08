import { addHousesSuccess, isLoading, hasErrored } from '../../actions'

describe('actions', () => {

  it('should have a type of FETCH_HOUSE_SUCCESS', () => {
    const mockHouses = [{name: 'WinterFell'}, {name: 'Lannister'}]
    const expected = {type: 'FETCH_HOUSE_SUCCESS', houses: mockHouses }
    const result = addHousesSuccess(mockHouses)

    expect(result).toEqual(expected)
  })

  it('should have a type of IS_LOADING', () => {
    const bool = true
    const expected = {type: 'IS_LOADING', isLoading: bool }
    const result = isLoading(bool)

    expect(result).toEqual(expected)
  })

  it('should have a type of HAS_ERRORED', () => {
    const message = 'Error'
    const expected = {type: 'HAS_ERRORED', message: message }
    const result = hasErrored(message)

    expect(result).toEqual(expected)
  })


})