'use strict'

let userInput;
const numbers = [];
let total = 0;

do { 
    userInput = prompt('Введите любое число');

    numbers.push(userInput)

    console.log(numbers);

    if (!Number.isInteger(Number(userInput))) {
        alert('Было введено не число, попробуйте еще раз');

        numbers.pop();
    }
}

while (userInput !== null);

for ( const item of numbers) {

    total = total + Number(item);
    
    console.log(total);
    
}

alert(`Общая сумма чисел равна ${total}`);

// for (let i = 0; i < numbers.length; i += 1) {

//     total = total + Number(numbers[i]);
    
//     console.log(total);

// }