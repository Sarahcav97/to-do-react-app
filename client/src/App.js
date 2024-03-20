import './css/App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
function App() {
	return (
		<div className='App'>
			<TodoForm />
			<TodoList />
		</div>
	);
}

export default App;
