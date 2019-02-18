'use strict'

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let login, password;

login = prompt ('Введите логин');

if (login === null) {
    alert('Отменено пользователем!');
}

else if (login !== adminLogin) {
    alert('Доступ запрещен, неверный логин!');
}

else {
    password = prompt ('Введите пароль');
}

if (password === undefined) {
    ;
}

else if (password === null) {
    alert('Отменено пользователем!');
}

else if (password !== adminPassword) {
    alert('Доступ запрещен, неверный пароль!');
}

else {
    alert('Добро пожаловать!');
}