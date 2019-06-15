"use strict";

const result = document.querySelector(".result");
const form = document.querySelector(".search-form");
const inputId = form.querySelector(".search-id");
const btnId = form.querySelector(".id");
const btnAll = form.querySelector(".all");
const name = form.querySelector(".name-post");
const age = form.querySelector(".age-post");
const btnNewUser = form.querySelector(".new-user");
const btnRemove = form.querySelector(".remove");
const btnUpdate = form.querySelector(".update");
const idUpdate = form.querySelector(".id-update");
const nameUpdate = form.querySelector(".name-update");
const ageUpdate = form.querySelector(".age-update");

form.addEventListener("click", eventHandler);

function eventHandler(evt) {
  evt.preventDefault();
  if (evt.target === btnId) {
    getUserById(inputId.value);
  }
  if (evt.target === btnAll) {
    getAllUsers();
  }
  if (evt.target === btnNewUser) {
    addUser(name.value, age.value);
  }

  if (evt.target === btnRemove) {
    removeUser(inputId.value);
  }

  if (evt.target === btnUpdate) {
    const user = { name: nameUpdate.value, age: ageUpdate.value };
    updateUser(idUpdate.value, user);
  }
}

function getAllUsers() {
  fetch("https://test-users-api.herokuapp.com/users/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => (result.innerHTML = JSON.stringify(data.data)))
    .catch(error => console.log("ERROR" + error));
}

function getUserById(id) {
  fetch("https://test-users-api.herokuapp.com/users/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      const array = data.data;
      array.find(user => {
        if (id === user.id) {
          return (result.innerHTML = JSON.stringify(user));
        }
        result.textContent = "Ошибка! Пользователя с таким id не существует";
      });
    })
    .catch(error => console.log("ERROR" + error));
}

function addUser(name, age) {
  fetch("https://test-users-api.herokuapp.com/users", {
    method: "POST",
    body: JSON.stringify({ name: name, age: age }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).catch(error => console.log("ERROR" + error));
}

function removeUser(id) {
  fetch("https://test-users-api.herokuapp.com/users/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).catch(error => console.log("ERROR" + error));
}

function updateUser(id, user) {
  fetch("https://test-users-api.herokuapp.com/users/" + id, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).catch(error => console.log("ERROR" + error));
}
