
import AddUserForm from './addUserForm'
import UpdateUserForm from './updateUserForm';
import { useSelector } from 'react-redux';
import { useReducer } from 'react';

const formReducer = (state, action) => {
	return {
		...state,
		[action.target.name]: action.target.value,
	}

}


export default function Form() {
	const [formData, setFormData] = useReducer(formReducer, {});
	const formId = useSelector(state => state.app.client.formId);

	return (
		<div className='container mx-auto py-5'>
			{formId ? UpdateUserForm({ formId, formData, setFormData }) : AddUserForm({ formData, setFormData })}
		</div>
	)
}