
import { useReducer } from "react"
import { AiOutlinePlus } from 'react-icons/ai'
import Success from "./success"
import ErrorComponent from "./error"
import { getUser, getUsers, updateUsers } from '../lib/helper'
import { useQueryClient, useMutation, useQuery, queryClient } from "react-query"


export default function UpdateUserForm({formId, formData, setFormData}) {

	const queryClient = useQueryClient()
	const {isLoading, isError, data, error} = useQuery(['users', formId], () => getUser(formId))
	const UpdateMutation = useMutation((newData) => updateUsers(formId, newData), {
		onSuccess: async (data) => {

			queryClient.prefetchQuery('users', getUsers)
		}
	})
	if (isLoading)
	return <div>Loading...</div>
	if (isError)
	return <ErrorComponent message={error.message} />
	const {name, avatar, salary, date, email, status} = data.data;
	
		
	const [firstname, lastname] = name ? name.split(' ') : formData

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (Object.keys(formData).length == 0)
			console.log("No Form Data");
	
		let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`;

		let updated = Object.assign({}, data, formData, { name: userName });
		UpdateMutation.mutate(updated)
		
	}

	return (
		<form className="flex flex-col gap-4 mb-3" onSubmit={handleSubmit}>
			<div className="input-type">
				<input onChange={setFormData} className  ="border w-full px-5 py-3 focus:outline-none rounded-md" type="text" defaultValue={firstname} name="firstname" placeholder="FirstName"></input>

			</div>
			<div className="input-type">
				<input onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" type="text" defaultValue={lastname}  name="lastname" placeholder="LastName"></input>

			</div>

			<div className="input-type">
				<input onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" type="text" defaultValue={email} name="email" placeholder="Email"></input>

			</div>
			<div className="input-type">
				<input onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" type="text" defaultValue={salary} name="salary" placeholder="Salary"></input>

			</div>
			<div className="input-type">
				<input onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" type="date" defaultValue={date} name="date" placeholder="Date"></input>

			</div>

			<div className="flex justify-center gap-20 my-3">
				<div>
					<input onChange={setFormData} defaultChecked={status == true} type="radio" value={true} id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
					<label htmlFor="radioDefault1" className="inline-block text-gray-800">
						Active
					</label>
				</div>

				<div>
					<input onChange={setFormData} defaultChecked={status !== true} type="radio" value={false} id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
					<label htmlFor="radioDefault2" className="inline-block text-gray-800">
						Inactive
					</label>
				</div>
			</div>
			<button className="mx-auto flex justify-center text-md w2/6 bg-yellow-500 text-white px-16 py-2 border rounded-md hover:bg-gray-50 hover:text-yellow-500">Update</button>
		</form>
	)
}