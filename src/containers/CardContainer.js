import React from 'react';
import { Card } from '../components/Card'
import { connect } from 'react-redux'


export const CardContainer = (props) => {
	
	// if (props.isLoading) {
		return (
			<div className='Display-info Container'>
				<img src="../../wolf.gif" />
			</div>
		)
	// 		} else {
	// 	return (
	// 		<div className='Display-info Container'>
	// 			{ props.houses.map(house => <Card {...house} />) }
	// 		</div>
	// 	)
	// }
}

export const mapStateToProps = (state) => ({
  houses: state.houses,
})


export default connect(mapStateToProps)(CardContainer)


