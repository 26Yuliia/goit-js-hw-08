// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

galleryEl.addEventListener('click', onImgClick);

const instance = basicLightbox.create(
  `<img width="1280" height="auto" src="">`
);

function onImgClick(e) {
  e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

console.log(galleryItems);
