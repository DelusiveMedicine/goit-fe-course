'use strict';

const sharm = 15;
const hurgada = 25;
const taba = 6;

let booking = prompt('Введите число необходимых мест'),
    seatNum = Number(booking);

    if ( booking !== null && seatNum <= taba && confirm('Есть место в группе taba, согласны ли вы быть в этой группе?')) {

    alert('Приятного путешествия в группе taba');

} else if (seatNum > taba && seatNum <= sharm && confirm('Есть место в группе sharm, согласны ли вы быть в этой группе?')) {
    
    alert('Приятного путешествия в группе sharm');

} else if (seatNum > sharm && seatNum <= hurgada && confirm('Есть место в группе hurgada, согласны ли вы быть в этой группе?')) {

    alert('Приятного путешествия в группе hurgada');

} else if (seatNum > taba && seatNum > sharm && seatNum > hurgada) {
    
    alert('Извините, столько мест нет ни в одной группе!');

} else if (!Number.isInteger(seatNum)) {
    
    alert("Ошибка ввода");
 
} else {

    alert("Нам очень жаль, приходите еще!"); 

}