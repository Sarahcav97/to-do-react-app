import React from 'react';
import { useEffect, useState } from 'react';
import client from '../api/client';
import Itemm from './Itemm';
export default function TodoList({ todos, setTodos }) {
	async function getData() {
		const { data } = await client.get('/todo');
		setTodos(data.todos);
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<div className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'>
				{todos &&
					todos.length > 0 &&
					todos.map((todo, index) => (
						<div key={index}>
							<Itemm item={todo} />
						</div>
					))}
			</div>
		</div>
	);
}
