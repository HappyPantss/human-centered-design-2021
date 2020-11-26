getData('https://opendata.rdw.nl/resource/6wzd-evwu.json').then((RDWData) => {
	// console.log("all data: ", RDWData)
	const locationArray = filterData(RDWData, 'startdataarea');
	console.log('All location data', 'startdataarea');

	// Thanks to @Razpudding / Laurens
	let numberPerYearArray = [];
	locationArray.forEach((year) => {
		// if the array includes a empty value, change it to 0
		// else make a new array with all the years + number of values
		if (numberPerYearArray.find((item) => item.year == year) == undefined) {
			numberPerYearArray.push({
				year: year,
				value: 0,
			});
		}
		// Count for every found item 1 to the value
		numberPerYearArray.find((item) => item.year == year).value += 1;
	});
	// Unique values
	const uniqueAreaValues = listUnique(locationArray);
	console.log('Unique area values:', uniqueAreaValues);

	return numberPerYearArray;
});

// Fetch the data to json
async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

// Returns all values for a certain key in an array of data
let filterData = (dataArray, key) => {
	return dataArray.map((item) => item[key].slice(0, 4));
};

// Returns all unique values in an array
let listUnique = (dataArray) => {
	//logic which finds unique values
	let uniqueArray = [];
	dataArray.forEach((item) => {
		if (uniqueArray.indexOf(item) == -1) {
			uniqueArray.push(item);
		}
	});
	return uniqueArray;
};