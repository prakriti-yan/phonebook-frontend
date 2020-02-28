import React from 'react'
import propTypes from 'prop-types'

const Filter = (props) =>{
	const { newFilter, handleFilterChange } = props
	return(
		<form className='font container'>
			<div className='form-group'>
				<label>Filter shown with</label>
				<input value = {newFilter} onChange = {handleFilterChange}/>
			</div>
		</form>
	)
}

Filter.propTypes = {
	newFilter: propTypes.string.isRequired,
	handleFilterChange: propTypes.func.isRequired
}
export default Filter

