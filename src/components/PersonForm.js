import React from 'react'
import propTypes from 'prop-types'

const PersonForm = (props) =>{
	const { addNumber, newName, newNumber, handleNameChange, handleNumberChange} = props
	return(
		<div>
			<h2 className='header'>Add a new</h2>
			<br/>
			<form onSubmit={addNumber} className='font'>
				<div className='form-group'>
					<label>name: </label>
					<input value = {newName} onChange= {handleNameChange}/>
					<br/>
					<label>number: </label>
					<input value = {newNumber} onChange = {handleNumberChange}/>
				</div>
				<div className='addbuttonDiv'>
					<button type="submit" className='addButton'>add</button>
				</div>
			</form>
		</div>
	)
}

PersonForm.propTypes = {
	addNumber: propTypes.func.isRequired,
	newName: propTypes.string.isRequired,
	newNumber: propTypes.string.isRequired,
	handleNameChange: propTypes.func.isRequired,
	handleNumberChange: propTypes.func.isRequired
}

export default PersonForm