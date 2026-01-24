import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';
import { toastError } from './js/toast';

const formEl = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let page = 35;
let totalImage = null;
let searchQuery = null;

formEl.addEventListener('submit', searchSubmitFn);
loadMoreBtn.addEventListener('click', loadMoreFn);

function searchSubmitFn(event) {
  event.preventDefault();
  const form = event.currentTarget;

  hideLoadMoreButton();

  const {
    'search-text': { value: searchValue },
  } = form.elements;
  searchQuery = searchValue.trim();
  if (!searchQuery) {
    toastError('Please fill in the search field!');
    return;
  }
  page = 1;

  clearGallery();
  tryCreateGallery(searchQuery, page);
  form.reset();
}

async function tryCreateGallery(searchQuery, page) {
  showLoader();
  try {
    const dataImage = await getImagesByQuery(searchQuery, page);
    totalImage = dataImage.total;
    if (totalImage === 0) {
      toastError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    createGallery(dataImage.hits);
    if (page * 15 < totalImage) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      if (page > 1) {
        toastError(
          "We're sorry, but you've reached the end of search results."
        );
      }
    }
  } catch (error) {
    console.log(error);
    // hideLoadMoreButton();

    // if (error.response) {
    //   toastError(error.response.status);
    //   console.log(error.response.data);
    //   console.log(error.response.status);
    //   console.log(error.response.headers);
    // } else if (error.request) {
    //   toastError('error request');
    //   console.log(error.request);
    // } else {
    //   toastError(error.message);
    //   console.log('Error', error.message);
    // }
    // console.log(error.config);

    toastError(error.message);
  } finally {
    hideLoader();
  }
}
async function loadMoreFn(event) {
  page += 1;
  console.log(totalImage);
  await tryCreateGallery(searchQuery, page);
  const liEl = document.querySelector('.gallery .gallery-item');
  const liElResult = liEl.getBoundingClientRect();
  console.log(liElResult);
  const liHight = liElResult.height * 2;
  console.log('🚀 ~ loadMoreFn ~ liHight:', liHight);

  window.scrollBy({
    top: liHight,
    behavior: 'smooth',
  });
}
