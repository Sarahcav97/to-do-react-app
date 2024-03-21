import './css/App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useState } from 'react';
function App() {
	const [todos, setTodos] = useState([]);
	return (
		<div className='App'>
			<TodoForm
				todos={todos}
				setTodos={setTodos}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
			/>
		</div>
	);
}

export default App;
