"use strict";

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3,
    userPass,
    n = attempts;

do {
  userPass = prompt('Введите пароль');
  
  if (passwords.includes(userPass)) {

    alert('Добро пожаловать!');

    break;
  }
  
  if (userPass === null) {
    
    break;
    
  }

  if (!passwords.includes(userPass)) {
    
    n -= 1;

    alert(`Неверный пароль, у вас осталось ${n} попыток`);
  }

  console.log(n);
  
  if (n === 0) {

  alert('У вас закончились попытки, аккаунт заблокирован!');

  break;

}

} while ( true );

