import connectMongo from '../../../database/conn'
import {getUsers, setUsers, updateUsers} from '../../../database/controller'


export default async function handler(req, res) {

	console.log("Made to normal handler")
	connectMongo();
	if (req.method == "GET")
		getUsers(req, res);
	else if (req.method == "POST")
		setUsers(req, res);
	else if (req.method == "PUT")
		updateUsers(req, res);
	else if (req.method == "DELETE")
		deleteUsers(req, res);
	else
	{
		res.status(405).json({ error: "Method not allowed" });
	}
}
