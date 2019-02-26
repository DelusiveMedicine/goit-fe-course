"use strict";

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Введите любое число");

  if (Number(userInput)) {

  numbers.push(userInput);

  }
  
  if (isNaN(userInput)) {

    alert("Было введено не число, попробуйте еще раз");

  }


} while (userInput !== null);

  console.log(numbers);

for (const item of numbers) {
  let itemNum = Number(item);

  total += itemNum;
}

console.log(total);

alert(`Общая сумма чисел равна ${total}`);

// for (let i = 0; i < numbers.length; i += 1) {

//     total += Number(numbers[i]);

//     console.log(total);

// }
