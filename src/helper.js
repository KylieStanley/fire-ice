export const cleanHouses = (houses) => {
	return houses.map(house => ({
		name: house.name, 
		founded: house.founded || 'N/A', 
		seats: house.seats, 
		titles: house.titles, 
		coatOfArms: house.coatOfArms, 
		ancestralWeapons: house.ancestralWeapons, 
		words: house.words || 'N/A'
	}))
}