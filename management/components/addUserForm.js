
import { useReducer } from "react"
import { AiOutlinePlus } from 'react-icons/ai'
import Success from "./success"
import ErrorComponent from "./error"

const formReducer = (state, action) => {
	return {
		...state,
		[action.target.name]: action.target.value,
	}

}

export default function AddUserForm() {
	const [formData, setFormData] = useReducer(formReducer, {});
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!Object.keys(formData).length == 0)
			console.log("No Form Data");
		else
			console.log("FormData ", formData);
	}
	if (Object.keys(formData).length > 0)
		return <Success message={"Employee"} />
	return (
		<form className="flex flex-col gap-4 mb-3" onSubmit={handleSubmit}>
			<div className="input-type">
				<input onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" type="text" name="firstname" placeholder="FirstName"></input>

			</div>
			<div className="input-type">
				<input onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" type="text" name="lastname" placeholder="LastName"></input>

			</div>

			<div className="input-type">
				<input onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" type="text" name="email" placeholder="Email"></input>

			</div>
			<div className="input-type">
				<input onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" type="text" name="salary" placeholder="Salary"></input>

			</div>
			<div className="input-type">
				<input onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" type="date" name="date" placeholder="Date"></input>

			</div>

			<div className="flex justify-center gap-20 my-3">
				<div>
					<input onChange={setFormData} type="radio" value="active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
					<label htmlFor="radioDefault1" className="inline-block text-gray-800">
						Active
					</label>
				</div>

				<div>
					<input onChange={setFormData} type="radio" value="inactive" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
					<label htmlFor="radioDefault2" className="inline-block text-gray-800">
						Inactive
					</label>
				</div>
			</div>
			<button className="mx-auto flex justify-center text-md w2/6 bg-green-500 text-white px-16 py-2 border rounded-md hover:bg-gray-50 hover:text-green-500">Add <AiOutlinePlus size={13} /></button>
		</form>
	)
}