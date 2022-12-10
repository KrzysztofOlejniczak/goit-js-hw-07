"use strict";

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  const galleryElement = `<div class="gallery__item">
    <a class="gallery__link" href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
    </a>
  </div>`;
  gallery.insertAdjacentHTML("beforeend", galleryElement);
});

gallery.addEventListener("click", (ev) => {
  if (ev.target.nodeName !== "IMG") {
    return;
  }

  ev.preventDefault();

  const modal = basicLightbox.create(
    `<img src="${ev.target.dataset.source}" width="800" height="600" />`
  );
  modal.show();
  console.log("Opening modal window");

  document.addEventListener("keydown", function escToClose(event) {
    if (event.key === "Escape") {
      modal.close();
      document.removeEventListener("keydown", escToClose);
      console.log("Closing modal window");
    }
  });
});
