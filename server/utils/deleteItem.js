const fs = require('fs');

function deleteItem(filePath, id) {
	const existingData = fs.readFileSync(filePath);
	const parsedData = JSON.parse(existingData);
	//find the index of the item we are looking for to delete
	const index = existingData.findIndex((item) => item.id === id);
	//remove item from the array
	existingData.splice(index, 1);
	fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
	return existingData;
}
module.exports = deleteItem;
