"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// do {
//   login = prompt('Enter login');
// if (login.length >= 4 && login.length <= 16) {
//   if (logins.includes(login)){
//     return ('Такой логин уже используется!');
//   } else {
//     logins.push(login);
//     return ('Логин успешно добавлен!');
//     break;
//   }
// } else {
//   return ('Ошибка! Логин должен быть от 4 до 16 символов');
// }
// } while (login !== null);

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (!allLogins.includes(login)) {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login))
    return "Ошибка! Логин должен быть от 4 до 16 символов";

    if (!isLoginUnique(allLogins, login))

      return "Такой логин уже используется!";

      console.log(allLogins.includes(login));

      allLogins.push(login);
      
      return "Логин успешно добавлен!";
};

// Вызовы функции для проверки
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);
