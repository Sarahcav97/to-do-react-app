import React from 'react';
export default function TodoForm() {
	const [formData, setFormData] = React.useState({
		todo: '',
		urgency: 'normal',
	});
	return (
		<div>
			<h1>TodoForm</h1>
			<form>
				<input
					placeholder='Todo'
					name='todo'
				/>
				<select name='urgency'>
					<option value='normal'>Normal</option>
					<option value='medium'>Medium</option>
					<option value='high'>High</option>
				</select>
				<button type='submit'>Save</button>
			</form>
		</div>
	);
}
