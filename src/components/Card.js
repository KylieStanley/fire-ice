import React from 'react';

export const Card = (props) => {
	const { name, founded, titles, seats, coatOfArms, ancestralWeapons, words } = props
	const splitTitles = titles.map(title => <p>Titles: { title }</p>)

	return (
		<div className="Card">
			<h1>{name}</h1>
			<h3>Founded: {founded}</h3>
			<p>Seats: {seats}</p>
			{splitTitles}
			<p>Weapons: {ancestralWeapons}</p>
			<p>Coat of Arms: {coatOfArms}</p>
			<p>Words: {words}</p>
		</div>
	)
}