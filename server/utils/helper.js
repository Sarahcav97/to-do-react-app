const fs = require('fs');
function appendFile(filePath, data) {
	const existingData = fs.readFileSync(filePath);
	const parsedData = JSON.parse(existingData);
	parsedData.push(data);
	fs.writeFileSync(filePath, JSON.stringify(pasedData, null, 2));
	console.log('Data has been added to the file');
	return parsedData;
}
module.exports = appendFile;