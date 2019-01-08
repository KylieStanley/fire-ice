import { CardContainer, mapStateToProps } from '../containers/CardContainer'


describe('CardContainer', () => {

  describe('mapStateToProps', () => {
    it('should return an object with the houses array and isLoading', () => {
      
      const mockState = {
        houses: [{name: 'WinterFell'}, {name: 'Lannister'}],
        isLoading: false,
        people: "person"
      }
      const expected = {
        houses: [{name: 'WinterFell'}, {name: 'Lannister'}],
        isLoading: false
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})