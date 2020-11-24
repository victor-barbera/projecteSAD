array = str.split(",");

const intersection = array1.filter(element => array2.includes(element));

const intersection = array1.filter(element => array2.indexOf(element) !== -1);