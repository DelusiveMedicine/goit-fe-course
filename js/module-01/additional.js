'use strict'

const sharm = 15;
const hurgada = 25;
const taba = 6;

let booking = prompt('Введите число необходимых мест');


if (isNaN(booking) || booking === '') {

    alert("Ошибка ввода");
    
} else if (booking === null) {

    alert("Нам очень жаль, приходите еще!");

} else if (booking <= taba && confirm('Есть место в группе taba, согласны ли вы быть в этой группе?')) {

    alert('Приятного путешествия в группе taba');

} else if (booking > taba && booking <= sharm && confirm('Есть место в группе sharm, согласны ли вы быть в этой группе?')) {

    alert('Приятного путешествия в группе sharm');

} else if (booking > sharm && booking <= hurgada && confirm('Есть место в группе hurgada, согласны ли вы быть в этой группе?')) {

    alert('Приятного путешествия в группе hurgada');

} else if (booking > hurgada) {

    alert('Извините, столько мест нет ни в одной группе!');

} else {

    alert('Нам очень жаль, приходите еще!');
    
    }


