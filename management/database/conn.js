import mongoose from 'mongoose'


const connectMongo = async () =>
{
	try 
	{
		const {connection} = await mongoose.connect(process.env.MONGO_URI)
		if (connection.readyState == 1)
			console.log("Connected to the Database");
		else
			console.log("Couldn't connect to the Database");
	}
	catch (errors)
	{
		console.log(errors)
	}
}

export default connectMongo;