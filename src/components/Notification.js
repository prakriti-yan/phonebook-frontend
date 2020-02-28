import React from 'react'
import '../global.css'

const Notification = ({ message, success }) =>{
	if (message === null){
		return null
	}else{
		const name = success? 'notice' : 'alert'
		return(
			<div className={name}>
				{message}
			</div>
		)}
}

export default Notification