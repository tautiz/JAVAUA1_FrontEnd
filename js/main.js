let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

function arrayDoubled(array) {
// return array.map(num => num * 2);
    return array.map(double);
}

function double(num) {
    return num * 2;
}

console.log(arrayDoubled(numbers));