// Escribe un programa en TypeScript que realice las siguientes operaciones

const numbersArray = [1, 2, 3, 4, 5];
const fruitArray = ['apple', 'orange', 'pear', 'banana'];
const booleanArray = [true, false];

numbersArray.push(6);
console.log('push', numbersArray);
numbersArray.pop();
console.log('pop', numbersArray);
const n3 = numbersArray.indexOf(3);
const n4 = numbersArray.slice(1, 4);
const n5 = numbersArray.map((n) => n * n);
const n6 = numbersArray.filter((n) => n % 2 === 0);
const n7 = numbersArray.reduce((a, b) => a + b);

console.log('index', n3, '\n', 'slice', n4, '\n', 'map', n5, '\n', 'filter', n6, '\n', 'reduce', n7);

const n81 = fruitArray.join(',');
console.log('Array to String: ', n81);
const n82 = fruitArray.concat();
console.log('String to Array', n82);

const numberMajor = [10, 20, 30, 40, 50];
const n9 = numberMajor.find((n) => n > 25);

console.log('Number Major', n9);

const n10 = numberMajor.every((n) => n > 0);
console.log('Number Positive', n10);

const n11 = numberMajor.some((n) => n > 40);
console.log('Number Major', n11);

const n121 = [1, 2, 3];
const n122 = [4, 5, 6];
const n12 = n121.push(...n122);

console.log('Array Concat', n12);

const n131 = [5, 1, 4, 2, 3];
const n13 = n131.sort();
console.log('Array order', n13);

const n141 = ['juan', 'nico', 'romer', 'esteban'];
const n14 = n141.sort();
console.log('Array order', n14);

const n151 = [10, 20, 30, 40, 50];
const n15 = n151.find((n) => n === 4);

console.log('Number four', n15);
