import React from 'react'
import Print from './Print'
import '../global.css'
import propTypes from 'prop-types'

const Persons =(props) =>{
	const { filteredPerson, handleClick  }=props
	
	const rows=() => filteredPerson.map(parts =>
		<Print 
			key = {parts.name} 
			parts={parts} 
			handleClick={handleClick(parts.id, parts.name)}/>)
	return(
		<div>
			<h2 className='header'>Numbers</h2>
			{rows()}
		</div>  )
}

Persons.propTypes = {
	filteredPerson: propTypes.array.isRequired,
	handleClick: propTypes.func.isRequired
}
export default Persons