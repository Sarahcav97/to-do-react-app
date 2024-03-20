import './css/App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
function App() {
	return (
		<div className='App'>
			<h1>App</h1>
			<TodoForm />
			<TodoList />
		</div>
	);
}

export default App;
