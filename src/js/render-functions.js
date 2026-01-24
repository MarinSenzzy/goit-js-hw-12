import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');
const lightbox = new SimpleLightbox('.gallery a');

const createMarkup = images => {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
  <img
  class="gallery-image"
  src="${webformatURL}"
  alt="${tags}"
  />
  </a>
   <ul class="discriptions">
      <li>
        <p class="disc-title">likes</p>
        <p class="disc-text">${likes}</p>
      </li>
      <li>
        <p class="disc-title">views</p>
        <p class="disc-text">${views}</p>
      </li>
      <li>
        <p class="disc-title">comments</p>
        <p class="disc-text">${comments}</p>
      </li>
      <li>
        <p class="disc-title">downloads</p>
        <p class="disc-text">${downloads}</p>
      </li>
    </ul>
  </li>
  `;
      }
    )
    .join(' ');
};
export function createGallery(images) {
  galleryEl.insertAdjacentHTML('beforeend', createMarkup(images));
  lightbox.refresh();
}
export function clearGallery() {
  galleryEl.innerHTML = '';
}
export function showLoader() {
  loader.classList.remove('is-hidden');
}
export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMore.classList.remove('is-hidden');
}
export function hideLoadMoreButton() {
  loadMore.classList.add('is-hidden');
}
