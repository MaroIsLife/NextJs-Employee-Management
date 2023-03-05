
import { BsPersonFillGear, BsFillTrashFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'


export default function Table() {
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
					<tr className="bg-gray-50 text-center">
						<td className="px-16 py-2 flex flex-row items-center">
						<span>Name Test</span>
						
						</td>
						<td className="px-16 py-2">
							<span>Email test</span>
						</td>
						<td className="px-16 py-2">
							<span>Salary test</span>
						</td>
						<td className="px-16 py-2">
							<span>Birthday</span>
						</td>
						<td className="px-16 py-2">
							<button><span className="bg-green-500 text-white px-5 py-1 rounded-full">Success</span></button>
						</td>
						<td className="px-16 py-2 flex gap-2">
							
							<button><FiEdit size={25} color={"rgb(34,197,94)"}></FiEdit></button>
							<span>  </span>
							<button><BsFillTrashFill size={25} color={"red"}></BsFillTrashFill></button>
						</td>
						
					
						
					</tr>
					
				</tbody>
			</table>
		</>)
}