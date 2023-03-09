import axios from 'axios'

const BASE_URL = 'http://localhost:3000';

export const  getUsers = async () =>
{
 	const response = await axios.get(`${BASE_URL}/api/users`);
	return response
}


export const getUser = async (userId) =>
{
	const response = await axios.get(`${BASE_URL}/api/users/${userId}`);
	return response
}


export const setUsers = async (user) =>
{
	const response = await axios.post(`${BASE_URL}/api/users`, user);
	return response
}

export const updateUsers = async (user) =>
{
	const response = await axios.put(`${BASE_URL}/api/users`, user);
	return response
}

export const deleteUsers = async (userId) =>
{
	const response = await axios.delete(`${BASE_URL}/api/users/${userId}`);
	return response
}