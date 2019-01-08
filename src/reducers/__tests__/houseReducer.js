import { houseReducer, isLoading, hasErrored } from '../houseReducer'

describe('houseReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = houseReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state with an array of houses', () => {
  	const mockHouses = [{name: 'WinterFell'}, {name: 'Lannister'}]
  	const mockAction = {type: 'FETCH_HOUSE_SUCCESS', houses: mockHouses}
    const expected = mockHouses
    const result = houseReducer([], mockAction)
    
    expect(result).toEqual(expected)
  })
})

describe('isLoading', () => {
  it('should return the initial state', () => {
    const expected = false
    const result = isLoading(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state with a boolean', () => {
  	const mockAction = {type: 'IS_LOADING', isLoading: true}
    const expected = true
    const result = isLoading(false, mockAction)
    
    expect(result).toEqual(expected)
  })
})

describe('hasErrored', () => {
  it('should return the initial state', () => {
    const expected = ''
    const result = hasErrored(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state with an error message', () => {
  	const mockAction = {type: 'HAS_ERRORED', message: 'error'}
    const expected = 'error'
    const result = hasErrored('', mockAction)
    
    expect(result).toEqual(expected)
  })
})