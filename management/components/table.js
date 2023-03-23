
import { BsPersonFillGear, BsFillTrashFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
//import Data from '../database/data.json'
import {getUsers} from '../lib/helper'
import {useQuery} from 'react-query'
import { useSelector , useDispatch} from 'react-redux'
import {toggleChangeAction, updateAction} from '../redux/reducer'
const Tr = ({_id, name, avatar, email, salary, date, status}) =>
{
	const visible = useSelector(state => state.app.client.toggleForm);
	const dispatch = useDispatch();

	const onUpdate = () =>
	{
		dispatch(toggleChangeAction(_id));
		console.log("visible ", visible);
		if (visible)
		{
			console.log("id ", _id);
			dispatch(updateAction(_id));
		}
	}

	
	return (<tr className="bg-gray-50 text-center">
		<td className="px-16 py-2 flex flex-row items-center">
			<img src={avatar || "?"} className="h-8 w-8 rounded-full object-cover mr-4" alt="avatar"></img>
			<span>{name || "?"}</span>

		</td>
		<td className="px-16 py-2">
			<span>{email || "?"}</span>
		</td>
		<td className="px-16 py-2">
			<span>{salary || "?"}</span>
		</td>
		<td className="px-16 py-2">
			<span>{date || "?"}</span>
		</td>
		<td className="px-16 py-2">
			
			{status ? <button><span className="bg-green-500 text-white px-5 py-1 rounded-full">{"Active"}</span></button> : <button><span className="bg-red-500 text-white px-5 py-1 rounded-full">{"Inactive"}</span></button>}
		</td>
		<td className="px-16 py-2 flex gap-2">
		
			<button onClick={onUpdate}><FiEdit size={25} color={"rgb(34,197,94)"}></FiEdit></button>
			<span>  </span>
			<button onClick={onUpdate}><BsFillTrashFill size={25} color={"red"}></BsFillTrashFill></button>
		</td>
	</tr>);
}

export default function Table  () {

	const {isLoading, isError, data, error} = useQuery('users',getUsers);

	



	if (isLoading || !data) {
		return <div>Loading...</div>
	}
	if (isError)
		return <div>Error {error}</div>


	return (
		<>
			<table className="min-w-full table-auto">
				<thead>
					<tr className="bg-gray-800">
						<th className="px-16 py-2">
							<span className="text-gray-200">Name</span>
						</th>
						<th className="px-16 py-2">
							<span className="text-gray-200">Email</span>
						</th>
						<th className="px-16 py-2">
							<span className="text-gray-200">Salary</span>
						</th>

						<th className="px-16 py-2">
							<span className="text-gray-200">Birthday</span>
						</th>
						<th className="px-16 py-2">
							<span className="text-gray-200">Status</span>
						</th>
						<th className="px-16 py-2">
							<span className="text-gray-200">Actions</span>
						</th>
					</tr>
				</thead>
				<tbody className="bg-gray-200">
					{
						//data.data.users.map((item, i) => {
						//	return (
						//		<Tr key={i} avatar={item.avatar} name={item.name} email={item.email} salary={item.salary} date={item.date} status={item.status}></Tr>
						//	)
						//})
						data.data.users.length >= 0 && data.data.users.map((obj, i) => <Tr {...obj} key={i} />)
					}
				</tbody>
			</table>
		</>)
}