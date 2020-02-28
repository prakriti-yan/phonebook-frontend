import React from 'react'
import '../global.css'
import propTypes from 'prop-types'

const Print =(props)=>{
	const { parts, handleClick } = props
	return (
		<p className='font'>
			<span className = "name"><strong>{parts.name}: </strong></span> 
			<span className = "number"><strong>{parts.number}</strong> </span>
			<button onClick= {handleClick} className='removeButton'>Delete</button>
		</p>		
	)   
}

Print.propTypes = {
	parts: propTypes.object.isRequired,
	handleClick:  propTypes.func.isRequired
}

export default Print