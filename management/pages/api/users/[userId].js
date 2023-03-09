import { useRouter } from 'next/router';
import connectMongo from '../../../database/conn'
import {getUser, deleteUsers, setUsers, updateUsers } from '../../../database/controller'


export default async function handler(req, res) {

	connectMongo();

	//read [userId] from url and pass it to getUser
	
	const {method}  = req; 

	if ('GET' == method)
		getUser(req, res);
	else if ('POST' == method)
		setUsers(req, res);
	else if ('PUT' == method)
		updateUsers(req, res);
	else if ('DELETE' == method)
		deleteUsers(req, res);
	else
	{
		res.status(405).json({ error: "Method not allowed" });
	}
}