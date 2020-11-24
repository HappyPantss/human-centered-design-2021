export default function(dataArray, key) {
    return dataArray.map((item) => item[key].slice(0, 4));
  };