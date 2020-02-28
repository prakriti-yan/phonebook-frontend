import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/number'
import Notification from './components/Notification'

const App = () => {
	const [ persons, setPersons] = useState([]) 
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')
	const [ newFilter, setNewFilter ] = useState('')
	const [ errorMessage, setErrorMessage ] = useState(null)

	const filteredPerson = 
    persons.filter(persons=> persons.name.toUpperCase().includes(newFilter.toUpperCase()))
  
	const handleNameChange = (event) =>{
		console.log(event.target.value)
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) =>{
		console.log(event.target.value)
		setNewNumber(event.target.value)
	}

	const handleFilterChange = (event) =>{
		console.log('filter is', event.target.value)
		setNewFilter(event.target.value)
	}

	const addNumber = (event) =>{
		event.preventDefault()
		const duplicate = persons.filter(person => person.name === newName)
		console.log('duplicate is', duplicate)
		if (duplicate.length !== 0){
			if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
				const id = duplicate[0].id
				const target = persons.find(n=>n.id === id)
				const changedPerson = {...target, number: newNumber}

				personService
					.update(id, changedPerson)
					.then(returnedPerson=>{
						setPersons(persons.map(person=>person.id !==id ? person : returnedPerson))
						setNewName('')
						setNewNumber('')
						setErrorMessage(`${newName}'s phone number has been updated!`)
						setTimeout(()=>{setErrorMessage(null)},3000)
					})
					.catch(error=>{
						setErrorMessage(`${newName} has already been removed!`)
						setTimeout(()=>{setErrorMessage(null)},3000)
						setPersons(persons.filter(n=>n.id !==id))
						setNewName('')
						setNewNumber('')
						console.log(error)
					})
			}
			setNewName('')
			setNewNumber('')
		}else{
			const nameObject = {
				name: newName,
				number: newNumber
			}
			personService
				.create(nameObject)
				.then(returnedPerson =>{
					setPersons(persons.concat(returnedPerson))
					setNewName('')
					setNewNumber('')
					setErrorMessage(`${newName} has been added!`)
					setTimeout(()=>{setErrorMessage(null)},3000)
				})
				.catch(error=>{
					// (`Person validation failed! Path name ${error.response.data.name} is shorter than the minilength 3!`)
					console.log(error.response)
					const message = error.response.data.error
					setErrorMessage(`${message}`)
					setTimeout(()=>{setErrorMessage(null)},3000)
				})
    
		}}

	useEffect(()=>{
		personService
			.getAll()
			.then(initialPersons =>{
				setPersons(initialPersons)
			})
	},[])


	const removePerson = (id, name) => () => {
		if (window.confirm(`Delete ${name}?`)){
			personService.deleteItem(id)
			setPersons(persons.filter(person=>person.id!==id))}
	}

	return (
		<div>
			<h2 className='title'>Phonebook</h2>
			<Notification message= {errorMessage}/>
			<Filter newFilter = {newFilter} handleFilterChange={handleFilterChange} />
			<div  className='container'>
				<PersonForm addNumber={addNumber} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
			</div>
			<div  className='container'>
				<Persons filteredPerson={filteredPerson} handleClick = {removePerson}/>
			</div>
		</div>
	)
}

export default App
