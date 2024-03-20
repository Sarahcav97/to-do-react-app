import React from 'react';
import { useEffect, useState } from 'react';
import client from '../api/client';
export default function TodoList() {
	const [todos, setTodos] = useState([]);
	async function getData() {
		const { data } = await client.get('/todo');
		setTodos(data.todos);
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className=''>
			<h1>to do list</h1>
			{todos &&
				todos.length > 0 &&
				todos.map((todo, index) => (
					<div key={index}>
						<p>{todo.todo}</p>
					</div>
				))}
		</div>
	);
}
