import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryList = galleryItems
.map(({ preview, original, description }) => { 
    return ` <div class="gallery__item">
     <a class="gallery__link" href="${original}">
         <img
         src="${preview}"
         class="gallery__image"
         alt="${description}"
         data-source="${original}"
         />
     </a>
     </div> `
 })
 .join(" ");

 galleryEl.insertAdjacentHTML('beforeend', galleryList);

const onClickImage = evt => {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}"/>`);
    instance.show();

    const closeByEsc = evt => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    }

    document.addEventListener('keydown', closeByEsc, {once: true});
}

galleryEl.addEventListener('click', onClickImage);
