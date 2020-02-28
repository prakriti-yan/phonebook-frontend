import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () =>{
	const request = axios.get(baseUrl)
	return request.then(response=>response.data)
}

const create = newNameObject =>{
	const request = axios.post(baseUrl, newNameObject)
	return request.then(response=>response.data)
}

const deleteItem = (id) =>{
	axios.delete(`${baseUrl}/${id}`)
}

const update =(id, updatedName) =>{
	const request = axios.put(`${baseUrl}/${id}`, updatedName)
	return request.then(response=>response.data)
}

export default { getAll, create, deleteItem, update }