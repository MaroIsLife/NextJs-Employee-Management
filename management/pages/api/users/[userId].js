import { useRouter } from 'next/router';
import connectMongo from '../../../database/conn'
import {getUser, deleteUsers, setUsers, updateUsers } from '../../../database/controller'
import Cors from 'cors'


const cors = Cors({
	"origin": "*",
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
	"preflightContinue": false,
	"optionsSuccessStatus": 204
})

function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result)
			}
			return resolve(result)
		})
	})
}

export default async function handler(req, res) {



	await runMiddleware(req, res, cors);


	connectMongo();

	//read [userId] from url and pass it to getUser
	console.log("Made to ID handler")

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