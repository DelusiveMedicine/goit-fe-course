"use strict";

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];
const container = document.querySelector(".container");

function createPostCard(post) {
  const card = document.createElement("div");
  card.classList.add("card");
  const image = document.createElement("img");
  image.src = post.img;
  image.classList.add("card__image");
  card.appendChild(image);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card__body");
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = post.title;
  cardTitle.classList.add("card__title");

  const cardDescr = document.createElement("p");
  cardDescr.textContent = post.text;
  cardDescr.classList.add("card__descr");

  const cardLink = document.createElement("a");
  cardLink.href = post.link;
  cardLink.textContent = post.link;
  cardBody.append(cardTitle, cardDescr, cardLink);

  container.append(card, cardBody);
}

function createCards(posts) {
  posts.reduce((acc, post) => acc + createPostCard(post), "");
}

createCards(posts);
