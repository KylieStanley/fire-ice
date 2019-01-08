import React from 'react';
import { connect } from 'react-redux'
import { Card } from '../components/Card'


export const CardContainer = (props) => {
	const { isLoading, houses } = props
	let containerContents = !isLoading ? houses.map(house => <Card {...house} />) : <img src="../wolf.gif" />

	return (
		<div className='Display-info Container'>
			{ containerContents }
		</div>
	)
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  houses: state.houses
})

export default connect(mapStateToProps)(CardContainer);
