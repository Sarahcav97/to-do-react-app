const express = require('express');
const path = require('path');
const appendFile = require('./utils/helper');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;
app.use(express.json()); //allows requests to come through
app.use(cors());
app.use((req, res, next) => {
	console.log('this is a server');
	console.log(`${req.method} Request to ${req.url}`);
	console.log({ reqBody: req.body });
	next();
});
const dbPath = path.join(__dirname, 'db/todo.json');
//create a new todo
app.post('/api/todo', (req, res) => {
	try {
		const { todo, urgency } = req.body;
		if (!todo) {
			return res.status(400).json({ message: 'invalid request' });
		}
		const newItem = {
			todo,
			urgency: urgency || 'normal',
			dateAdded: new Date().toISOString(),
		};
		appendFile(dbPath, newItem);
		res.status(201).json({ message: 'todo has been added' });
	} catch (e) {
		res.status(500).json({ message: e.message });
	}
});
//get all todos
app.get('/api/todo', (req, res) => {
	try {
		const todoData = fs.readFileSync(dbPath);
		const parsedData = JSON.parse(todoData);
		res.status(200).json({ todos: parsedData });
	} catch (e) {
		res.status(500).json({ message: e.message });
	}
});
app.listen(3001, () => {
	console.log(`server is working on https://localhost:${PORT}`);
});
