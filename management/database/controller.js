import Users from '../model/user.js'



export async function getUsers(req, res)
{
	try 
	{
		const users = await Users.find({}) //returns all users;
		
		if (users)
			return res.status(202).json({users})
		else
			res.status(404).json({error: "Couldn't get users"});
	}
	catch(err)
	{
		res.status(404).json({ error: "Couldn't get users" })
	}

}


export async function getUser(req, res)
{
	try 
	{
		const {userId} = req.query;

		console.log()
		if (userId)
		{
			const user = await Users.findById(userId);
			return res.status(202).json(user)
		}
		else
			throw new Error();

	}
	catch (err)
	{
		return res.status(404).json({ error: "Couldn't get user" })
	}
}

export async function setUsers(req, res)
{
	try 
	{
		if (!req.body)
			return res.status(400).json({ error: "No body" })

		Users.create(req.body)
		return res.status(201).json({message: "User created"});
	}

	catch (err)
	{
		res.status(409).json({ error: "Couldn't set users", message: err.message })
	}
	
}

export async function updateUsers(req, res) {
	try 
	{
		const {userId} = req.query;
		if (userId && req.body)
		{
			console.log("userBody ", req.body.data);
			console.log("userId ", userId);

			const users = await Users.findByIdAndUpdate(userId, req.body);
			console.log("users ", users)
			return res.status(202).json({ message: "User Updated" })
		}
		else
		{
			throw new Error();
		}
	}

	catch (err) 
	{
		res.status(404).json({ error: "Couldn't Update users", message: err.message })
	}

}


export async function deleteUsers(req, res) {
	try {
		const { userId } = req.query;
		if (userId) 
		{
			await Users.findByIdAndDelete(userId);
			return res.status(202).json({ message: `User ${userId} Deleted` })
		}
		else
			throw new Error();
	}

	catch (err) 
	{
		res.status(404).json({ error: "Couldn't Delete users", message: err.message })
	}

}