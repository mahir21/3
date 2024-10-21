const numbers = [1,2,3,4,5,6];



//Example filter even numbers from array
const evenNumber = numbers.filter((num) => num%2 !== 0);

console.log(evenNumber);


const numbers2 = [1,2,3,4,5,6];

//Map function is used to iterate over the values based on call back function();
const squareNumber = numbers2.map((num) => num*num);

console.log(squareNumber);