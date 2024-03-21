const fs = require('fs');
function appendFile(filePath, data) {
	const existingData = fs.readFileSync(filePath);
	const parsedData = JSON.parse(existingData);
	parsedData.push(data);
	fs.writeFileSync(filePath, JSON.stringify(parsedData, null, 2));
	console.log('Data has been added to the file');
	return parsedData;
}
function deleteItem(filePath, id) {
	const existingData = fs.readFileSync(filePath);
	const index = existingData.findIndex((item) => item.id === id);
	//remove item from the array
	existingData.splice(index, 1);
	fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
	return existingData;
}
module.exports = appendFile;
