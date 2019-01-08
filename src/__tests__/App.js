import { App, mapStateToProps, mapDispatchToProps } from '../containers/App/App'
import { fetchHouses } from '../thunks/fetchHouses'

jest.mock('../thunks/fetchHouses')


describe('App', () => {

  describe('mapStateToProps', () => {
    it('should return an object with the todos array', () => {
      
      const mockState = {
        houses: [{name: 'WinterFell'}, {name: 'Lannister'}],
        isLoading: false,
        error: "error"
      }
      const expected = {
        error: "error"
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
  describe('mapDispatchToProps', () => {
    it('calls dispatch with a fetchHouses action when fetchHouses is called', () => {
      const url = "someurl.com"
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchHouses(url)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchHouses(url)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})

