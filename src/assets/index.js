import {
    dataSource,
    selectedColumn,
} from './config.js';

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

getData(dataSource).then((RDWData) => {
    // console.log("all data: ", RDWData)
    const locationArray = filterData(RDWData, selectedColumn);
    console.log('All location data', locationArray);

    // Unique values
    const uniqueAreaValues = listUnique(locationArray);
    console.log('Unique area values:', uniqueAreaValues);
});

let filterData = (dataArray, key) => {
    return dataArray.map((item) => item[key]);
}

// Returns all unique values in an array
let listUnique = (dataArray) => {
    //logica which finds unique values
    let uniqueArray = [];
    dataArray.forEach((item) => {
        if (uniqueArray.indexOf(item) == -1) {
            uniqueArray.push(item);
        }
    });
    return uniqueArray;
};