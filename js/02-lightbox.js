"use strict";

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  const galleryElement = `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`;
  gallery.insertAdjacentHTML("beforeend", galleryElement);
});

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.on("show.simplelightbox", () => console.log("Opening modal window"));
lightbox.on("close.simplelightbox", () => console.log("Closing modal window"));
