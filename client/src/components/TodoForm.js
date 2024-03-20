import React from 'react';
import client from '../api/client';
export default function TodoForm() {
	const [formData, setFormData] = React.useState({
		todo: '',
		urgency: 'normal',
	});
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { data } = await client.post('/todo', formData);
	};
	return (
		<div>
			<h1 className='font-bold mt-10'>TodoForm</h1>
			<form onSubmit={handleSubmit}>
				<input
					placeholder='Todo'
					name='todo'
					onChange={handleChange}
				/>
				<select
					name='urgency'
					onChange={handleChange}
				>
					<option value='normal'>Normal</option>
					<option value='medium'>Medium</option>
					<option value='high'>High</option>
				</select>
				<button type='submit'>Save</button>
			</form>
		</div>
	);
}
